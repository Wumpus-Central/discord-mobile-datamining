// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import InfoBox from "InfoBox.tsx";
import isSocialLayerApplication from "../../../applications/isSocialLayerApplication.tsx";
import shouldWarnAuthorizedAppTwoWayDefault from "../shouldWarnAuthorizedAppTwoWay.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const InfoBoxDefault = InfoBox;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let result = size.fileFinishedImporting(
  "modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsAuthedAppDeleteWarningModal(arg0) {
      const cResult = require("c").c(25);
      ({ application, scopes, onDelete } = arg0);
      if (cResult[0] === application) {
        if (cResult[1] === scopes) {
          let tmp4 = cResult[2];
        }
        _require = tmp4;
        if (cResult[3] === application.name) {
          if (cResult[4] === tmp4) {
            if (cResult[6] === application.name) {
              if (cResult[7] === tmp4) {
                if (cResult[9] !== tmp4) {
                  function getInfoBox(id) {
                    let tmp5 = shouldWarnAuthorizedAppTwoWayDefault(id.id);
                    if (tmp5) {
                      const obj = { children: null };
                      const intl = util.intl;
                      const obj2 = { applicationName: id.name };
                      obj.children = intl.format(util.t.KRnERi, obj2);
                      tmp5 = React3(InfoBoxDefault, obj);
                      const tmp3Result = InfoBoxDefault;
                    }
                    const children = [tmp5];
                    let tmp9 = closure_0;
                    if (closure_0) {
                      const obj3 = { look: InfoBox.InfoBoxLooks.WARNING, children: null };
                      const intl2 = util.intl;
                      obj3.children = intl2.string(util.t.LY35Zy);
                      tmp9 = React3(InfoBoxDefault, obj3);
                      const tmp3Result2 = InfoBoxDefault;
                    }
                    children[1] = tmp9;
                    return hasOwnProperty(React4, { children });
                  }
                  cResult[9] = tmp4;
                  cResult[10] = getInfoBox;
                  let tmp12 = getInfoBox;
                } else {
                  tmp12 = cResult[10];
                }
                if (cResult[11] === application) {
                  if (cResult[12] === tmp12) {
                    let tmp13 = cResult[13];
                  }
                  const _Symbol = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(1126).intl;
                    const stringResult = intl3.string(tmp(1126).t.xUqheM);
                    cResult[14] = stringResult;
                    let tmp16 = stringResult;
                  } else {
                    tmp16 = cResult[14];
                  }
                  if (cResult[15] !== onDelete) {
                    let obj2 = { variant: "destructive", text: tmp16, onPress: onDelete };
                    const tmp20 = closure_3(tmp(5304).AlertActionButton, obj2, "confirm");
                    cResult[15] = onDelete;
                    cResult[16] = tmp20;
                    let tmp18 = tmp20;
                  } else {
                    tmp18 = cResult[16];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj3 = { variant: "secondary", text: null };
                    const intl4 = tmp(1126).intl;
                    obj3.text = intl4.string(tmp(1126).t["ETE/oC"]);
                    const tmp23 = closure_3(tmp(5304).AlertActionButton, obj3, "cancel");
                    cResult[17] = tmp23;
                    let tmp21 = tmp23;
                  } else {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] !== tmp18) {
                    const obj4 = { children: null };
                    const items = [tmp18, tmp21];
                    obj4.children = items;
                    const tmp27 = closure_5(closure_4, obj4);
                    cResult[18] = tmp18;
                    cResult[19] = tmp27;
                    let tmp24 = tmp27;
                  } else {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === tmp9) {
                    if (cResult[21] === tmp13) {
                      if (cResult[22] === tmp24) {
                        if (cResult[23] === tmp6) {
                          let tmp28 = cResult[24];
                        }
                        return tmp28;
                      }
                    }
                  }
                  const obj5 = { title: tmp6, content: tmp9, extraContent: tmp13, actions: tmp24 };
                  const tmp30 = closure_3(tmp(5304).AlertModal, obj5);
                  cResult[20] = tmp9;
                  cResult[21] = tmp13;
                  cResult[22] = tmp24;
                  cResult[23] = tmp6;
                  cResult[24] = tmp30;
                  tmp28 = tmp30;
                }
                const tmp12Result = tmp12(application);
                cResult[11] = application;
                cResult[12] = tmp12;
                cResult[13] = tmp12Result;
                tmp13 = tmp12Result;
              }
            }
            let intl2 = tmp(1126).intl;
            const formatToPlainString = intl2.formatToPlainString;
            let name = tmp(1126).t;
            if (tmp4) {
              const obj6 = { applicationName: application.name };
              let formatToPlainStringResult = formatToPlainString(name.inM1Yt, obj6);
            } else {
              const obj7 = { applicationName: application.name };
              formatToPlainStringResult = formatToPlainString(name.QWGvxA, obj7);
            }
            name = application.name;
            cResult[6] = name;
            cResult[7] = tmp4;
            cResult[8] = formatToPlainStringResult;
          }
        }
        let intl = tmp(1126).intl;
        if (tmp4) {
          const obj8 = { applicationName: application.name };
          let formatToPlainStringResult1 = intl.formatToPlainString(tmp(1126).t["paC+US"], obj8);
        } else {
          formatToPlainStringResult1 = intl.string(tmp(1126).t["DT39A+"]);
        }
        cResult[3] = application.name;
        cResult[4] = tmp4;
        cResult[5] = formatToPlainStringResult1;
      }
      let obj = require("c");
      const result = require("isSocialLayerApplication").isSocialLayerSDKAuthorization(application, scopes);
      cResult[0] = application;
      cResult[1] = scopes;
      cResult[2] = result;
      tmp4 = result;
      const tmpResult = require("isSocialLayerApplication");
    }
  : function UserSettingsAuthedAppDeleteWarningModal(application) {
      application = application.application;
      ({ scopes, onDelete } = application);
      const result = isSocialLayerApplication.isSocialLayerSDKAuthorization(application, scopes);
      const intl = util.intl;
      if (result) {
        const obj2 = { applicationName: application.name };
        let formatToPlainStringResult = intl.formatToPlainString(util.t["paC+US"], obj2);
      } else {
        formatToPlainStringResult = intl.string(util.t["DT39A+"]);
      }
      const intl2 = util.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = util.t;
      if (result) {
        const obj3 = { applicationName: application.name };
        let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
      } else {
        const obj4 = { applicationName: application.name };
        formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
      }
      let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
      if (tmp9) {
        const obj5 = { children: null };
        const intl3 = util.intl;
        const obj6 = { applicationName: application.name };
        obj5.children = intl3.format(util.t.KRnERi, obj6);
        tmp9 = React3(InfoBoxDefault, obj5);
        const tmp8Result = InfoBoxDefault;
      }
      const items = [tmp9];
      let tmp12 = result;
      if (result) {
        const obj7 = { look: InfoBox.InfoBoxLooks.WARNING, children: null };
        const intl4 = util.intl;
        obj7.children = intl4.string(util.t.LY35Zy);
        tmp12 = React3(InfoBoxDefault, obj7);
        const tmp8Result2 = InfoBoxDefault;
      }
      items[1] = tmp12;
      const obj8 = {
        title: formatToPlainStringResult,
        content: formatToPlainStringResult1,
        extraContent: hasOwnProperty(React4, { children: items }),
        actions: null,
      };
      const obj9 = { children: null };
      const obj10 = { variant: "destructive", text: null, onPress: null };
      const intl5 = util.intl;
      obj10.text = intl5.string(util.t.xUqheM);
      obj10.onPress = onDelete;
      const items1 = [React3(AlertModal.AlertActionButton, obj10, "confirm")];
      const obj11 = { variant: "secondary", text: null };
      const intl6 = util.intl;
      obj11.text = intl6.string(util.t["ETE/oC"]);
      items1[1] = React3(AlertModal.AlertActionButton, obj11, "cancel");
      obj9.children = items1;
      obj8.actions = hasOwnProperty(React4, obj9);
      return React3(AlertModal.AlertModal, obj8);
    };
