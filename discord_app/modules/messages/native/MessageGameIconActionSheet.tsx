// discord_app/modules/messages/native/MessageGameIconActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj3 = {
  contentWrapper: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: num },
  gameDescriptionWrapper: { flexDirection: "column", justifyContent: "flex-start", flex: 1 },
  gameIcon: null,
  gameDescriptionWrapperOuter: null,
  timestamp: null,
};
let size = { width: 56, height: 56, marginRight: 8, borderRadius: nativeDefault.radii.sm };
obj3.gameIcon = size;
obj3.gameDescriptionWrapperOuter = { flexDirection: "row" };
obj3.timestamp = { marginBottom: 4 };
let closure_8 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      const cResult = applicationId(576).c(30);
      applicationId = applicationId.applicationId;
      const messageTimestamp = applicationId.messageTimestamp;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== applicationId) {
        const fn = function h() {
          return ApplicationStore.getApplication(applicationId);
        };
        cResult[1] = applicationId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = applicationId(576);
      const stateFromStores = applicationId(504).useStateFromStores(first, tmp7);
      if (null == stateFromStores) {
        return null;
      } else {
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
          let tmp8 = str;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== tmp8) {
          const obj2 = { uri: tmp8 };
          cResult[5] = tmp8;
          cResult[6] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp4.gameIcon) {
          if (cResult[8] === tmp9) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === messageTimestamp) {
            if (cResult[11] === tmp4.timestamp) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] !== stateFromStores.name) {
              const intl = tmp(1126).intl;
              const obj3 = { applicationName: stateFromStores.name };
              const formatResult = intl.format(tmp(1126).t.J3s8JP, obj3);
              cResult[13] = stateFromStores.name;
              cResult[14] = formatResult;
              let tmp17 = formatResult;
            } else {
              tmp17 = cResult[14];
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const obj4 = {
                helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS),
              };
              const formatResult1 = intl2.format(tmp(1126).t.BPDKoA, obj4);
              cResult[15] = formatResult1;
              let tmp19 = formatResult1;
            } else {
              tmp19 = cResult[15];
            }
            if (cResult[16] === tmp17) {
              if (cResult[17] === tmp19) {
                let tmp23 = cResult[18];
              }
              if (cResult[19] === tmp4.gameDescriptionWrapper) {
                if (cResult[20] === tmp23) {
                  if (cResult[21] === tmp14) {
                    let tmp26 = cResult[22];
                  }
                  if (cResult[23] === tmp4.gameDescriptionWrapperOuter) {
                    if (cResult[24] === tmp26) {
                      if (cResult[25] === tmp10) {
                        let tmp30 = cResult[26];
                      }
                      if (cResult[27] === tmp4.contentWrapper) {
                        if (cResult[28] === tmp30) {
                          let tmp34 = cResult[29];
                        }
                        return tmp34;
                      }
                      const obj5 = { startExpanded: true, children: null };
                      const obj6 = { style: contentWrapper, children: tmp30 };
                      obj5.children = closure_6(View, obj6);
                      const tmp37 = closure_6(tmp(6645).BottomSheet, obj5);
                      cResult[27] = tmp4.contentWrapper;
                      cResult[28] = tmp30;
                      cResult[29] = tmp37;
                      tmp34 = tmp37;
                    }
                  }
                  const obj7 = { style: gameDescriptionWrapperOuter, children: null };
                  const items1 = [tmp10, tmp26];
                  obj7.children = items1;
                  const tmp33 = closure_7(View, obj7);
                  cResult[23] = tmp4.gameDescriptionWrapperOuter;
                  cResult[24] = tmp26;
                  cResult[25] = tmp10;
                  cResult[26] = tmp33;
                  tmp30 = tmp33;
                }
              }
              const obj8 = { style: tmp13, children: null };
              const items2 = [tmp14, tmp23];
              obj8.children = items2;
              const tmp29 = closure_7(View, obj8);
              cResult[19] = tmp4.gameDescriptionWrapper;
              cResult[20] = tmp23;
              cResult[21] = tmp14;
              cResult[22] = tmp29;
              tmp26 = tmp29;
            }
            const obj10 = { variant: "text-sm/medium", children: null };
            const items3 = [tmp17, " ", tmp19];
            obj10.children = items3;
            const tmp25 = closure_7(tmp(4886).Text, obj10);
            cResult[16] = tmp17;
            cResult[17] = tmp19;
            cResult[18] = tmp25;
            tmp23 = tmp25;
          }
          const obj11 = {
            style: tmp4.timestamp,
            variant: "text-xs/medium",
            color: "text-muted",
            children: messageTimestamp,
          };
          const tmp16 = closure_6(tmp(4886).Text, obj11);
          cResult[10] = messageTimestamp;
          cResult[11] = tmp4.timestamp;
          cResult[12] = tmp16;
          tmp14 = tmp16;
        }
        const obj12 = { style: tmp4.gameIcon, resizeMode: "contain", source: tmp9, disableColor: true };
        const tmp12 = closure_6(tmp(1188).Icon, obj12);
        cResult[7] = tmp4.gameIcon;
        cResult[8] = tmp9;
        cResult[9] = tmp12;
        tmp10 = tmp12;
      }
      const tmpResult = applicationId(504);
    }
  : (applicationId) => {
      applicationId = applicationId.applicationId;
      const tmp = closure_8();
      const items = [ApplicationStore];
      const stateFromStores = applicationId(504).useStateFromStores(items, () =>
        ApplicationStore.getApplication(applicationId),
      );
      let tmp5Result = null;
      if (null != stateFromStores) {
        const obj2 = { style: tmp.contentWrapper, children: null };
        const obj3 = { style: tmp.gameDescriptionWrapperOuter, children: null };
        const obj4 = { style: tmp.gameIcon, resizeMode: "contain", source: null, disableColor: true };
        let str;
        if (stateFromStores != null) {
          str = stateFromStores.getIconURL(56);
        }
        if (str == null) {
          str = "";
        }
        const obj5 = { startExpanded: true, children: null };
        const obj6 = { uri: str };
        obj4.source = obj6;
        const items1 = [closure_6(tmp2(1188).Icon, obj4)];
        const obj7 = { style: tmp.gameDescriptionWrapper, children: null };
        const obj8 = {
          style: tmp.timestamp,
          variant: "text-xs/medium",
          color: "text-muted",
          children: applicationId.messageTimestamp,
        };
        const items2 = [closure_6(tmp2(4886).Text, obj8)];
        const obj9 = { variant: "text-sm/medium", children: null };
        const intl = tmp2(1126).intl;
        const obj10 = { applicationName: stateFromStores.name };
        const items3 = [intl.format(tmp2(1126).t.J3s8JP, obj10), " "];
        const intl2 = tmp2(1126).intl;
        const obj11 = {
          helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS),
        };
        items3[2] = intl2.format(tmp2(1126).t.BPDKoA, obj11);
        obj9.children = items3;
        items2[1] = closure_7(tmp2(4886).Text, obj9);
        obj7.children = items2;
        items1[1] = closure_7(View, obj7);
        obj3.children = items1;
        obj2.children = closure_7(View, obj3);
        obj5.children = closure_6(View, obj2);
        tmp5Result = closure_6(tmp2(6645).BottomSheet, obj5);
      }
      return tmp5Result;
    };
