// styled.d.ts
import 'styled-components';
import { theme } from './theme'

type ThemeProps = typeof theme
declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeProps { }
}
