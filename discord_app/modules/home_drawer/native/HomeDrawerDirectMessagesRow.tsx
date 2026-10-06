// === Module 16290: HomeDrawerDirectMessagesRow ===

// Module 16290 (HomeDrawerDirectMessagesRow)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4748 */;
import Text_Text from "Text/Text" /* 4892 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16286 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let friendIDs;

let metroImportAll;
let metroImportDefault;
let size;
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: size };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let intl2;
  let items1;
  let obj7;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore, PresenceStore];
    const fn = function x() {
      let status;
      friendIDs = friendIDs.getFriendIDs();
      return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    let tmp10;
    let tmp15;
    let tmp18;
    if (cResult[3] === tmp4) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(intl3.t.YUU0RF) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      const tmp17 = metroImportDefault(Text2, obj2);
      cResult[5] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== tmp10) {
      const obj3 = { title: tmp15, subtitle: tmp10 };
      const tmp20 = metroImportDefault(HomeDrawerShared.HomeDrawerSharedItem, obj3);
      cResult[6] = tmp10;
      cResult[7] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    return tmp18;
  }
  let tmp11 = null;
  if (stateFromStores > 0) {
    const obj4 = { style: tmp4.subtitle, children: items1 };
    const obj5 = { style: tmp4.onlineDot };
    items1 = [metroImportDefault(View, obj5), ];
    const obj6 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: intl.format(intl3.t.N5UIKr, obj7) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    obj7 = { numFriends: stateFromStores };
    items1[1] = metroImportDefault(Text, obj6);
    tmp11 = metroImportAll(View, obj4);
  }
  cResult[2] = stateFromStores;
  cResult[3] = tmp4;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let Text2;
  let intl;
  let intl2;
  let items1;
  let obj5;
  let obj7;
  const tmp = closure_9();
  const items = [RelationshipStore, PresenceStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let status;
    friendIDs = friendIDs.getFriendIDs();
    return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
  });
  let tmp5 = null;
  if (stateFromStores > 0) {
    const obj2 = { style: tmp.subtitle, children: items1 };
    const obj3 = { style: tmp.onlineDot };
    items1 = [metroImportDefault(View, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: intl.format(intl3.t.N5UIKr, obj5) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    obj5 = { numFriends: stateFromStores };
    items1[1] = metroImportDefault(Text, obj4);
    tmp5 = metroImportAll(View, obj2);
  }
  const obj6 = { title: metroImportDefault(Text2, obj7), subtitle: tmp5 };
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  obj7 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(intl3.t.YUU0RF) };
  Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  return metroImportDefault(HomeDrawerSharedItem, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "dm-expanded-children" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp6 = null;
  if (MobileHomeDrawerExperiment.useConfig(first).enableHome) {
    tmp6 = null;
    if (!tmp5) {
      let tmp7;
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = metroImportDefault(closure_10, {});
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      tmp6 = tmp7;
    }
  }
  return tmp6;
}) : (() => {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = metroImportDefault(closure_10, {});
    }
  }
  return tmp2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default tmp4;