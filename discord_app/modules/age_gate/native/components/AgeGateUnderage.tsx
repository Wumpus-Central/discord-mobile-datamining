// discord_app/modules/age_gate/native/components/AgeGateUnderage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = 80;
  }
  let obj = { container: null, header: null, body: null, buttonWrapper: null };
  obj = {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
    paddingTop: 0,
    paddingBottom: num,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  obj.container = obj;
  obj.header = { marginTop: 16 };
  obj.body = { marginTop: 8, lineHeight: 20, textAlign: "center" };
  obj.buttonWrapper = { width: "100%", marginTop: 24 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

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
  const tmp4 = closure_9(tmp3);
  let obj = onClose(flag2[7]);
  const navigation = obj.useNavigation();
  const items = [onClose, existingUser, navigation, flag2];
  const layoutEffect = navigation.useLayoutEffect(() => {
    if (existingUser) {
      let fn = () => null;
    } else {
      let obj = NavigatorHeader;
      fn = obj.getHeaderBackButton(onClose);
    }
    obj = { headerLeft: fn, gestureEnabled: !flag2 };
    navigation.setOptions(obj);
  }, items);
  let obj1 = onClose(flag2[9]);
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
    tmp12 = closure_6(tmp(tmp2[11]), {});
  }
  const items1 = [
    tmp12,
    closure_6(existingUser(flag2[12]), {}),
    closure_6(onClose(flag2[13]).ShieldSpotIllustration, {}),
    ,
    ,
  ];
  obj = { style: tmp4.header, children: stringResult };
  items1[3] = closure_6(existingUser(flag2[14]), obj);
  obj1 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = tmp5(tmp2[10]).intl;
  if (flag) {
    let stringResult1 = intl2.string(tmp5(tmp2[10]).t.GDQgHL);
  } else {
    if (underageMessage == null) {
      const intl3 = tmp5(tmp2[10]).intl;
      underageMessage = intl3.string(tmp5(tmp2[10]).t.WqEH4D);
    }
    const obj2 = { underageMessage, helpURL: tmp(tmp2[16]).getArticleURL(HelpdeskArticles.AGE_GATE) };
    stringResult1 = intl2.format(tmp5(tmp2[10]).t.b0QzXe, obj2);
    const tmpResult = tmp(tmp2[16]);
  }
  obj1.children = stringResult1;
  items1[4] = closure_6(onClose(flag2[15]).Text, obj1);
  let tmp10Result = null;
  if (existingUser) {
    const obj3 = { children: null };
    const obj4 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
    const intl4 = tmp5(tmp2[10]).intl;
    obj4.children = intl4.format(tmp5(tmp2[10]).t["3axQdB"], { days: 30 });
    const items2 = [tmp14(tmp5(tmp2[15]).Text, obj4)];
    const obj5 = { style: tmp4.buttonWrapper, children: null };
    const obj6 = { onPress: onClose, text: null, grow: true };
    const intl5 = tmp5(tmp2[10]).intl;
    obj6.text = intl5.string(tmp5(tmp2[10]).t.JhDw5o);
    obj5.children = tmp14(tmp5(tmp2[17]).Button, obj6);
    items2[1] = tmp14(tmp11, obj5);
    obj3.children = items2;
    tmp10Result = tmp10(closure_7, obj3);
  }
  items1[5] = tmp10Result;
  obj.children = items1;
  return closure_8(View, obj);
}
