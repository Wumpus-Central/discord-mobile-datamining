// _runtime/04598_constant.js

export default function constant(arg0) {
  closure_0 = arg0;
  return () => closure_0;
};