/**
 * Type declarations for global development variables
 */

// Extended Window object for use in configureStore.ts
interface ExtendedWindow extends Window {
   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
}

type FormErrors<T> = { [error in keyof T]?: string };
type GenericId = string;
