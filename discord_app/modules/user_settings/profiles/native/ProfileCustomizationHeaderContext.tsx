// === Module 16450: ProfileCustomizationHeaderContext ===

// Module 16450 (ProfileCustomizationHeaderContext)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
let context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationHeaderContext.tsx");

export default context;
export function ProfileCustomizationHeaderSpacer() {
  context = noop.useContext(context);
  let tmp2 = null;
  if (null != context) {
    const obj = { style: null };
    ({ height: obj2.height, backgroundColor: obj2.backgroundColor } = context);
    obj.style = { height: null, backgroundColor: null };
    tmp2 = <View style={null} />;
    const obj3 = { height: null, backgroundColor: null };
  }
  return tmp2;
}