import { useTranslation } from 'react-i18next';
import { Button as BaseButton } from "../Button";
import styled from 'styled-components';

const Button = styled(BaseButton)`
    position: fixed;
    right: 0;
    bottom: 2rem;
    `

export function TranslateButton() {
    const { i18n } = useTranslation();

    const isEnglish = i18n.language === 'en';

    const toggleLanguage = () => {
        const newLang = isEnglish ? 'pt' : 'en';

        i18n.changeLanguage(newLang);
    };

    return (
        <Button onClick={() => toggleLanguage()}>
            {isEnglish ? 'Traduzir para o portugues' : 'Traduzir para o inglês'}
        </Button>
    )
}