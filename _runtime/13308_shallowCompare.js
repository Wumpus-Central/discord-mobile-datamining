
export default function shallowCompare(props) {
  const tmp3 = require(13309) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13309) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};