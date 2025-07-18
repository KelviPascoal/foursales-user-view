import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Box, Container, Heading, Text } from '../../components';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../components/Link';
import { useTranslation } from 'react-i18next';

const mapStateToProps = (state: RootState) => ({
  selectedUser: state.users.selectedUser,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  t: (key: string) => string;
}

class UserProfileComponent extends React.Component<Props> {
  render() {
    const { selectedUser: user, t } = this.props;

    if (!user) {
      return <Text>{t('NO_USER_SELECTED') || 'Nenhum usuário selecionado.'}</Text>;
    }

    return (
      <Container>
        <Box>
          <Link as={RouterLink} to="/">
            ← {t('BACK')}
          </Link>

          <Box
            borderStyle="solid"
            borderWidth="0.5px"
            borderRadius="md"
            marginTop="1rem"
            background="white"
            p={4}
            backgroundImage="linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/profile-decoration.png')"
            backgroundPosition="right center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
          >
            <Box display="flex" alignItems="center" marginBottom="1rem" gap="0.5rem">
              <Heading variant="primary" size="large">
                {user.name}
              </Heading>
              <Text variant="highlight">
                <strong>@{user.username}</strong>
              </Text>
            </Box>

            <Box>
              <Heading >{t('BASIC_INFORMATION')}</Heading>
              <Text>
                <strong>{t('EMAIL')}:</strong> {user.email}
              </Text>
              <Text>
                <strong>{t('PHONE')}:</strong> {user.phone}
              </Text>
              <Text>
                <strong>{t('WEBSITE')}:</strong>{' '}
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </Text>
            </Box>

            <Box>
              <Heading>{t('ADDRESS')}</Heading>
              <Text>
                {user.address.street}, {user.address.suite}
              </Text>
              <Text>
                {user.address.city} - {user.address.zipcode}
              </Text>
              <Text>
                <strong>{t('GEO')}:</strong> {user.address.geo.lat}, {user.address.geo.lng}
              </Text>
            </Box>

            <Box>
              <Heading>{t('COMPANY')}</Heading>
              <Text>
                <strong>{t('NAME')}:</strong> {user.company.name}
              </Text>
              <Text>
                <strong>{t('PHRASE')}:</strong> {user.company.catchPhrase}
              </Text>
              <Text>
                <strong>{t('SECTOR')}:</strong> {user.company.bs}
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  }
}

const UserProfileWrapper = (props: PropsFromRedux) => {
  const { t } = useTranslation();

  return <UserProfileComponent {...props} t={t} />;
};

export const UserProfile = connector(UserProfileWrapper);
