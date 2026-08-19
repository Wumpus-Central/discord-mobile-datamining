// discord_app/modules/age_gate/native/components/AgeGateUnderage.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = 80;
  }
  const obj = { alignItems: "center", justifyContent: "center", flex: 1, padding: 16, paddingTop: 0, paddingBottom: num, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  obj[1] = { marginTop: 16 };
  obj[2] = { marginTop: 8, lineHeight: 20, textAlign: "center" };
  obj[3] = { width: "100%", marginTop: 24 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

export default function AgeGateUnderage(onClose) {
  onClose = onClose.onClose;
  ({ underageMessage, existingUser } = onClose);
  if (existingUser === undefined) {
    existingUser = false;
  }
  let flag = onClose.fromRegister;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onClose.disableSwipe;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp3 = existingUser(flag2[6])();
  const tmp4 = callback2(tmp3);
  let obj = onClose(flag2[7]);
  const navigation = obj.useNavigation();
  const items = [onClose, existingUser, navigation, flag2];
  const layoutEffect = navigation.useLayoutEffect(() => {
    if (existingUser) {
      let fn = () => null;
    } else {
      let obj = onClose(flag2[8]);
      fn = obj.getHeaderBackButton(onClose);
    }
    obj = { headerLeft: fn, gestureEnabled: !flag2 };
    navigation.setOptions(obj);
  }, items);
  obj1 = onClose(flag2[9]);
  obj1.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  const intl = onClose(flag2[10]).intl;
  const string = intl.string;
  const t = onClose(flag2[10]).t;
  if (existingUser) {
    let stringResult = string(t["NR/zrG"]);
  } else {
    stringResult = string(t.nCB6Ga);
  }
  obj = { style: tmp4.container, children: null };
  let tmp12 = null;
  if (!tmp3) {
    tmp12 = callback(tmp(tmp2[11]), {});
  }
  const items1 = [tmp12, callback(existingUser(flag2[12]), {}), callback(onClose(flag2[13]).ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp4.header, children: stringResult };
  items1[3] = callback(existingUser(flag2[14]), obj);
  obj1 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = tmp5(tmp2[10]).intl;
  if (flag) {
    let stringResult1 = intl2.string(tmp5(tmp2[10]).t.GDQgHL);
  } else {
    if (underageMessage == null) {
      const intl3 = tmp5(tmp2[10]).intl;
      underageMessage = intl3.string(tmp5(tmp2[10]).t.WqEH4D);
    }
    const obj2 = { underageMessage: null, helpURL: null };
    obj2[0] = underageMessage;
    obj2[1] = tmp(tmp2[16]).getArticleURL(HelpdeskArticles.AGE_GATE);
    stringResult1 = intl2.format(tmp5(tmp2[10]).t.b0QzXe, obj2);
    const tmpResult = tmp(tmp2[16]);
  }
  obj1[3] = stringResult1;
  items1[4] = callback(onClose(flag2[15]).Text, obj1);
  let tmp10Result = null;
  if (existingUser) {
    const obj3 = { children: null };
    const obj4 = { style: null, variant: "text-md/medium", color: "interactive-text-default", children: null };
    obj4[0] = tmp4.body;
    const intl4 = tmp5(tmp2[10]).intl;
    obj4[3] = intl4.format(tmp5(tmp2[10]).t["3axQdB"], { days: 30 });
    const items2 = [callback(tmp5(tmp2[15]).Text, obj4), ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp4.buttonWrapper;
    const obj6 = { onPress: null, text: null, grow: true };
    obj6[0] = onClose;
    const intl5 = tmp5(tmp2[10]).intl;
    obj6[1] = intl5.string(tmp5(tmp2[10]).t.JhDw5o);
    obj5[1] = callback(tmp5(tmp2[17]).Button, obj6);
    items2[1] = callback(View, obj5);
    obj3[0] = items2;
    tmp10Result = callback(closure_7, obj3);
  }
  items1[5] = tmp10Result;
  obj[1] = items1;
  return callback(View, obj);
};