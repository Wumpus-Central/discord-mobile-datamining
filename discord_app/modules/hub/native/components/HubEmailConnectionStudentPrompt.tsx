// discord_app/modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import HubConstants from "../../HubConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, navigation, onClose;

let Fonts;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, Image: closure_4 } = react_native);
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ AnalyticEvents: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 },
  header: obj2,
  row: obj3,
};
obj2 = { textAlign: "center", marginBottom: 24 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3 = {
  borderRadius: nativeDefault.radii.sm,
  marginBottom: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_9 = createStyles(obj);
const tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let container;
      let header;
      let items;
      let obj7;
      let obj = onClose(navigation[9]);
      const cResult = obj.c(23);
      onClose = onClose.onClose;
      const invite = onClose.invite;
      const tmp4 = closure_9();
      let obj2 = onClose(navigation[10]);
      navigation = obj2.useNavigation();
      if (cResult[0] === invite) {
        if (cResult[1] === navigation) {
          let tmp6;
          let tmp8;
          let tmp10;
          let tmp13;
          let tmp19;
          let tmp18;
          if (cResult[2] === onClose) {
            tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          ({ container, header } = tmp4);
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[12]).intl;
            const stringResult = intl.string(onClose(navigation[12]).t["+/Pv0h"]);
            cResult[4] = stringResult;
            tmp8 = stringResult;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] !== tmp4.header) {
            const obj3 = { style: header, children: tmp8 };
            const tmp12 = closure_7(onClose(navigation[13]).LegacyText, obj3);
            cResult[5] = tmp4.header;
            cResult[6] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[6];
          }
          const _Symbol2 = Symbol;
          const row = tmp4.row;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { source: invite(navigation[14]) };
            const tmp17 = closure_7(closure_4, obj4);
            cResult[7] = tmp17;
            tmp13 = tmp17;
          } else {
            tmp13 = cResult[7];
          }
          const _Symbol3 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[12]).intl;
            const stringResult1 = intl2.string(onClose(navigation[12]).t["a7a/D+"]);
            const intl3 = tmp(tmp2[12]).intl;
            const stringResult2 = intl3.string(onClose(navigation[12]).t.Gsegk8);
            cResult[8] = stringResult1;
            cResult[9] = stringResult2;
            tmp19 = stringResult2;
            tmp18 = stringResult1;
          } else {
            tmp18 = cResult[8];
            tmp19 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            let tmp22;
            let tmp27;
            let tmp32;
            if (cResult[11] === tmp4.row) {
              tmp22 = cResult[12];
            }
            const _Symbol4 = Symbol;
            const row2 = tmp4.row;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { source: invite(navigation[16]) };
              const tmp31 = closure_7(closure_4, obj5);
              cResult[13] = tmp31;
              tmp27 = tmp31;
            } else {
              tmp27 = cResult[13];
            }
            const _Symbol5 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(tmp2[12]).intl;
              const stringResult3 = intl4.string(onClose(navigation[12]).t.GLG9n4);
              cResult[14] = stringResult3;
              tmp32 = stringResult3;
            } else {
              tmp32 = cResult[14];
            }
            if (cResult[15] === onClose) {
              let tmp34;
              if (cResult[16] === tmp4.row) {
                tmp34 = cResult[17];
              }
              if (cResult[18] === tmp4.container) {
                if (cResult[19] === tmp22) {
                  if (cResult[20] === tmp34) {
                    let tmp39;
                    if (cResult[21] === tmp10) {
                      tmp39 = cResult[22];
                    }
                    return tmp39;
                  }
                }
              }
              const obj6 = { children: closure_8(closure_3, obj7) };
              obj7 = { style: container, children: items };
              items = [tmp10, tmp22, tmp34];
              const HubEmailConnectionScreen = tmp(tmp2[17]).HubEmailConnectionScreen;
              const tmp43 = closure_7(HubEmailConnectionScreen, obj6);
              cResult[18] = tmp4.container;
              cResult[19] = tmp22;
              cResult[20] = tmp34;
              cResult[21] = tmp10;
              cResult[22] = tmp43;
              tmp39 = tmp43;
            }
            const obj8 = {
              DEPRECATED_style: row2,
              leading: tmp27,
              trailing: invite(navigation[15]).Arrow,
              label: tmp32,
              onPress: onClose,
            };
            const tmp37 = invite(navigation[15]);
            const tmp38 = closure_7(tmp37, obj8);
            cResult[15] = onClose;
            cResult[16] = tmp4.row;
            cResult[17] = tmp38;
            tmp34 = tmp38;
          }
          const obj9 = {
            DEPRECATED_style: row,
            leading: tmp13,
            trailing: invite(navigation[15]).Arrow,
            label: tmp18,
            subLabel: tmp19,
            onPress: tmp6,
          };
          const tmp25 = invite(navigation[15]);
          const tmp26 = closure_7(tmp25, obj9);
          cResult[10] = tmp6;
          cResult[11] = tmp4.row;
          cResult[12] = tmp26;
          tmp22 = tmp26;
        }
      }
      const fn = function s() {
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.HUB_STUDENT_PROMPT_CLICKED);
        const obj2 = { onClose, invite };
        navigation.push(HubEmailConnectionSteps.VERIFY_EMAIL, obj2);
      };
      cResult[0] = invite;
      cResult[1] = navigation;
      cResult[2] = onClose;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (onClose) => {
      let closure_2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj3;
      let obj6;
      let obj8;
      onClose = onClose.onClose;
      const invite = onClose.invite;
      const tmp = closure_9();
      let obj = onClose(1490);
      dependencyMap = obj.useNavigation();
      let obj2 = { children: closure_8(closure_3, obj3) };
      obj3 = { style: tmp.container, children: items };
      const HubEmailConnectionScreen = onClose(12409).HubEmailConnectionScreen;
      const obj4 = { style: tmp.header, children: intl.string(onClose(1126).t["+/Pv0h"]) };
      const LegacyText = onClose(1188).LegacyText;
      intl = onClose(1126).intl;
      items = [closure_7(LegacyText, obj4), ,];
      const obj5 = {
        DEPRECATED_style: tmp.row,
        leading: closure_7(closure_4, obj6),
        trailing: invite(6640).Arrow,
        label: intl2.string(onClose(1126).t["a7a/D+"]),
        subLabel: intl3.string(onClose(1126).t.Gsegk8),
        onPress() {
          const obj = AnalyticsUtilsDefault;
          obj.track(metroRequire.HUB_STUDENT_PROMPT_CLICKED);
          const obj2 = { onClose, invite };
          closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, obj2);
        },
      };
      obj6 = { source: invite(12411) };
      const tmp2 = invite(6640);
      intl2 = onClose(1126).intl;
      intl3 = onClose(1126).intl;
      items[1] = closure_7(tmp2, obj5);
      const obj7 = {
        DEPRECATED_style: tmp.row,
        leading: closure_7(closure_4, obj8),
        trailing: invite(6640).Arrow,
        label: intl4.string(onClose(1126).t.GLG9n4),
        onPress: onClose,
      };
      obj8 = { source: invite(12412) };
      const tmp3 = invite(6640);
      intl4 = onClose(1126).intl;
      items[2] = closure_7(tmp3, obj7);
      return closure_7(HubEmailConnectionScreen, obj2);
    };
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default tmp9;
