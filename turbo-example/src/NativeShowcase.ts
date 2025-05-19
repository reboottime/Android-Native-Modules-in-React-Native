import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

// define lib contracts 
// these functions are implemented in Java/Kotlin and supported by the native module
export interface Spec extends TurboModule {
  reverseString: (str: string) => string;

  getNumbers: () => Array<number>;

  getOBject: () => { [key: string]: string };

  promiseNumber: (value: number) => Promise<number>;

  callMeLater: (successCB: () => void, failureCB: () => void) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Showcase');
