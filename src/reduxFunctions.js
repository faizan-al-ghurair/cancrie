import { persistor } from "./store";

export const resetRedux = () => {
  persistor.purge();
};
