import "_objectWithoutProperties";
import noop from "noop";


export default function useRouteCache(arg0) {
  const memo = React.useMemo(() => {
    const obj = { current: null };
    obj[0] = new Map();
    return obj;
  }, []);
  return arg0;
};
export const CHILD_STATE = Symbol("CHILD_STATE");