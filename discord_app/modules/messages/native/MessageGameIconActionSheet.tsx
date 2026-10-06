// === Module 11441: MessageGameIconActionSheet ===

// Module 11441 (MessageGameIconActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, applicationId;

let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = { contentWrapper: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: num }, gameDescriptionWrapper: { flexDirection: "column", justifyContent: "flex-start", flex: 1 }, gameIcon: size, gameDescriptionWrapperOuter: { flexDirection: "row" }, timestamp: { marginBottom: 4 } };
size = { width: 56, height: 56, marginRight: 8, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let contentWrapper;
  let first;
  let gameDescriptionWrapperOuter;
  let items1;
  let items2;
  let items3;
  let obj6;
  let obj9;
  let tmp7;
  const obj = applicationId(576);
  const cResult = obj.c(30);
  applicationId = applicationId.applicationId;
  const messageTimestamp = applicationId.messageTimestamp;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function h() {
      return ApplicationStore.getApplication(applicationId);
    };
    cResult[1] = applicationId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = applicationId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp8;
    let tmp9;
    ({ contentWrapper, gameDescriptionWrapperOuter } = tmp4);
    if (cResult[3] !== stateFromStores) {
      let str;
      if (stateFromStores != null) {
        str = stateFromStores.getIconURL(56);
      }
      if (str == null) {
        str = "";
      }
      cResult[3] = stateFromStores;
      cResult[4] = str;
      tmp8 = str;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== tmp8) {
      const obj2 = { uri: tmp8 };
      cResult[5] = tmp8;
      cResult[6] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp4.gameIcon) {
      let tmp10;
      if (cResult[8] === tmp9) {
        tmp10 = cResult[9];
      }
      if (cResult[10] === messageTimestamp) {
        let tmp14;
        let tmp17;
        let tmp19;
        if (cResult[11] === tmp4.timestamp) {
          tmp14 = cResult[12];
        }
        if (cResult[13] !== stateFromStores.name) {
          const intl = tmp(1126).intl;
          const obj3 = { applicationName: stateFromStores.name };
          const formatResult = intl.format(applicationId(1126).t.J3s8JP, obj3);
          cResult[13] = stateFromStores.name;
          cResult[14] = formatResult;
          tmp17 = formatResult;
        } else {
          tmp17 = cResult[14];
        }
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const format = intl2.format;
          const obj4 = { helpdeskArticle: obj9.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
          const BPDKoA = tmp(1126).t.BPDKoA;
          obj9 = HelpdeskUtilsDefault;
          const formatResult1 = format(BPDKoA, obj4);
          cResult[15] = formatResult1;
          tmp19 = formatResult1;
        } else {
          tmp19 = cResult[15];
        }
        if (cResult[16] === tmp17) {
          let tmp23;
          if (cResult[17] === tmp19) {
            tmp23 = cResult[18];
          }
          if (cResult[19] === tmp4.gameDescriptionWrapper) {
            if (cResult[20] === tmp23) {
              let tmp26;
              if (cResult[21] === tmp14) {
                tmp26 = cResult[22];
              }
              if (cResult[23] === tmp4.gameDescriptionWrapperOuter) {
                if (cResult[24] === tmp26) {
                  let tmp30;
                  if (cResult[25] === tmp10) {
                    tmp30 = cResult[26];
                  }
                  if (cResult[27] === tmp4.contentWrapper) {
                    let tmp34;
                    if (cResult[28] === tmp30) {
                      tmp34 = cResult[29];
                    }
                    return tmp34;
                  }
                  const obj5 = { startExpanded: true, children: closure_6(View, obj6) };
                  obj6 = { style: contentWrapper, children: tmp30 };
                  BottomSheet = tmp(6652).BottomSheet;
                  const tmp37 = closure_6(BottomSheet, obj5);
                  cResult[27] = tmp4.contentWrapper;
                  cResult[28] = tmp30;
                  cResult[29] = tmp37;
                  tmp34 = tmp37;
                }
              }
              const obj7 = { style: gameDescriptionWrapperOuter, children: items1 };
              items1 = [tmp10, tmp26];
              const tmp33 = closure_7(View, obj7);
              cResult[23] = tmp4.gameDescriptionWrapperOuter;
              cResult[24] = tmp26;
              cResult[25] = tmp10;
              cResult[26] = tmp33;
              tmp30 = tmp33;
            }
          }
          const obj8 = { style: tmp13, children: items2 };
          items2 = [tmp14, tmp23];
          const tmp29 = closure_7(View, obj8);
          cResult[19] = tmp4.gameDescriptionWrapper;
          cResult[20] = tmp23;
          cResult[21] = tmp14;
          cResult[22] = tmp29;
          tmp26 = tmp29;
        }
        const obj10 = { variant: "text-sm/medium", children: items3 };
        items3 = [tmp17, " ", tmp19];
        const tmp25 = closure_7(applicationId(4892).Text, obj10);
        cResult[16] = tmp17;
        cResult[17] = tmp19;
        cResult[18] = tmp25;
        tmp23 = tmp25;
      }
      const obj11 = { style: tmp4.timestamp, variant: "text-xs/medium", color: "text-muted", children: messageTimestamp };
      const tmp16 = closure_6(applicationId(4892).Text, obj11);
      cResult[10] = messageTimestamp;
      cResult[11] = tmp4.timestamp;
      cResult[12] = tmp16;
      tmp14 = tmp16;
    }
    const obj12 = { style: tmp4.gameIcon, resizeMode: "contain", source: tmp9, disableColor: true };
    const tmp12 = closure_6(applicationId(1188).Icon, obj12);
    cResult[7] = tmp4.gameIcon;
    cResult[8] = tmp9;
    cResult[9] = tmp12;
    tmp10 = tmp12;
  }
}) : ((applicationId) => {
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj3;
  let obj6;
  applicationId = applicationId.applicationId;
  const messageTimestamp = applicationId.messageTimestamp;
  const tmp = closure_8();
  const items = [ApplicationStore];
  const obj = applicationId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.contentWrapper, children: closure_7(View, obj3) };
    obj3 = { style: tmp.gameDescriptionWrapperOuter, children: items1 };
    BottomSheet = tmp2(6652).BottomSheet;
    let str;
    const obj4 = { style: tmp.gameIcon, resizeMode: "contain", source: obj6, disableColor: true };
    const Icon = tmp2(1188).Icon;
    if (stateFromStores != null) {
      str = stateFromStores.getIconURL(56);
    }
    if (str == null) {
      str = "";
    }
    const obj5 = { startExpanded: true, children: closure_6(View, obj2) };
    obj6 = { uri: str };
    items1 = [closure_6(Icon, obj4), ];
    const obj7 = { style: tmp.gameDescriptionWrapper, children: items2 };
    const obj8 = { style: tmp.timestamp, variant: "text-xs/medium", color: "text-muted", children: messageTimestamp };
    items2 = [closure_6(applicationId(4892).Text, obj8), ];
    const obj9 = { variant: "text-sm/medium", children: items3 };
    const Text = tmp2(4892).Text;
    const intl = tmp2(1126).intl;
    const obj10 = { applicationName: stateFromStores.name };
    items3 = [intl.format(applicationId(1126).t.J3s8JP, obj10), " ", ];
    const intl2 = tmp2(1126).intl;
    const format = intl2.format;
    const obj11 = { helpdeskArticle: obj13.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    const BPDKoA = tmp2(1126).t.BPDKoA;
    obj13 = HelpdeskUtilsDefault;
    items3[2] = format(BPDKoA, obj11);
    items2[1] = closure_7(Text, obj9);
    items1[1] = closure_7(View, obj7);
    tmp5Result = closure_6(BottomSheet, obj5);
  }
  return tmp5Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default tmp5;