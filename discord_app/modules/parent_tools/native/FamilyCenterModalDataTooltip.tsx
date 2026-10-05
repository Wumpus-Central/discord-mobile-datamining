// discord_app/modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import FriendsIcon from "../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadIcon from "../../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import CreditCardIcon from "../../../design/components/Icon/native/redesign/generated/CreditCardIcon.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import GiftIcon from "../../../design/components/Icon/native/redesign/generated/GiftIcon.tsx";
import Modal2 from "../../../design/components/Modal/native/Modal.native.tsx";
import PhoneIcon from "../../../design/components/Icon/native/redesign/generated/PhoneIcon.tsx";
import ServerGridIcon from "../../../design/components/Icon/native/redesign/generated/ServerGridIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, obj1, tmp3;

let GIFTS;
let GUILD_ADD;
let GUILD_INTERACTION;
let PURCHASES;
let TOTAL_VOICE_MINUTES;
let USER_ADD;
let USER_CALLED;
let USER_INTERACTION;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj7;
let size;
function headerTitle() {
  return null;
}
function render() {
  return closure_1_6(closure_1_12, {});
}
const View = react_native.View;
const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  [USER_INTERACTION]: ChatIcon.ChatIcon,
  [USER_CALLED]: PhoneIcon.PhoneIcon,
  [USER_ADD]: FriendsIcon.FriendsIcon,
  [GUILD_ADD]: ServerGridIcon.ServerGridIcon,
  [GUILD_INTERACTION]: ThreadIcon.ThreadIcon,
  [PURCHASES]: CreditCardIcon.CreditCardIcon,
  [TOTAL_VOICE_MINUTES]: ClockIcon.ClockIcon,
  [GIFTS]: GiftIcon.GiftIcon,
};
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } =
  TeenActionDisplayType);
let createStyles = createStyles_mod;
let obj2 = { row: obj3, content: { flexShrink: 1 }, iconContainer: size, header: obj4, icon: obj5 };
obj3 = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
createStyles = createStyles.createStyles;
size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
  flexShrink: 0,
  marginRight: nativeDefault.space.PX_12,
};
obj4 = { marginBottom: nativeDefault.space.PX_4 };
obj5 = { tintColor: nativeDefault.colors.TEXT_BRAND };
let closure_9 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let IconComponent;
      let description;
      let header;
      let items;
      let items1;
      obj = react2;
      const cResult = obj.c(19);
      ({ header, description, IconComponent } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] === IconComponent) {
        let tmp5;
        if (cResult[1] === tmp4.icon) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.iconContainer) {
          let tmp7;
          if (cResult[4] === tmp5) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === header) {
            let tmp11;
            let tmp14;
            if (cResult[7] === tmp4.header) {
              tmp11 = cResult[8];
            }
            if (cResult[9] !== description) {
              const obj2 = { variant: "text-xs/medium", color: "text-default", children: description };
              const tmp16 = metroRequire(Text_Text.Text, obj2);
              cResult[9] = description;
              cResult[10] = tmp16;
              tmp14 = tmp16;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp4.content) {
              if (cResult[12] === tmp11) {
                let tmp17;
                if (cResult[13] === tmp14) {
                  tmp17 = cResult[14];
                }
                if (cResult[15] === tmp4.row) {
                  if (cResult[16] === tmp7) {
                    let tmp21;
                    if (cResult[17] === tmp17) {
                      tmp21 = cResult[18];
                    }
                    return tmp21;
                  }
                }
                const obj3 = { style: tmp4.row, children: items };
                items = [tmp7, tmp17];
                const tmp24 = metroImportDefault(View, obj3);
                cResult[15] = tmp4.row;
                cResult[16] = tmp7;
                cResult[17] = tmp17;
                cResult[18] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj4 = { style: tmp4.content, children: items1 };
            items1 = [tmp11, tmp14];
            const tmp20 = metroImportDefault(View, obj4);
            cResult[11] = tmp4.content;
            cResult[12] = tmp11;
            cResult[13] = tmp14;
            cResult[14] = tmp20;
            tmp17 = tmp20;
          }
          const obj5 = {
            style: tmp4.header,
            variant: "text-sm/bold",
            color: "mobile-text-heading-primary",
            children: header,
          };
          const tmp13 = metroRequire(Text_Text.Text, obj5);
          cResult[6] = header;
          cResult[7] = tmp4.header;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
        const obj6 = { style: tmp4.iconContainer, children: tmp5 };
        const tmp10 = metroRequire(View, obj6);
        cResult[3] = tmp4.iconContainer;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const obj7 = { style: tmp4.icon };
      const tmp6 = metroRequire(IconComponent, obj7);
      cResult[0] = IconComponent;
      cResult[1] = tmp4.icon;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let IconComponent;
      let description;
      let header;
      let items;
      let items1;
      let obj3;
      ({ header, description, IconComponent } = arg0);
      const tmp = closure_9();
      obj = { style: tmp.row, children: items };
      const obj2 = { style: tmp.iconContainer, children: metroRequire(IconComponent, obj3) };
      obj3 = { style: tmp.icon };
      items = [metroRequire(View, obj2)];
      const obj4 = { style: tmp.content, children: items1 };
      items1 = [,];
      const obj5 = {
        style: tmp.header,
        variant: "text-sm/bold",
        color: "mobile-text-heading-primary",
        children: header,
      };
      items1[0] = metroRequire(Text_Text.Text, obj5);
      items1[1] = metroRequire(Text_Text.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: description,
      });
      items[1] = metroImportDefault(View, obj4);
      return metroImportDefault(View, obj);
    };
createStyles = createStyles_mod;
let obj6 = { container: obj7, groupHeader: { marginBottom: nativeDefault.space.PX_24 } };
obj7 = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
const createStyles2 = createStyles.createStyles;
({ marginBottom: nativeDefault.space.PX_24 });
let closure_11 = createStyles2(obj6);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button;
      let closure_0;
      let intl3;
      let items;
      let items1;
      let obj3;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp5;
      let tmp6;
      const tmp = _require;
      obj = require("react");
      const cResult = obj.c(29);
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef2493.n6LOrh);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(_modDef2493.JNLpDZ);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(11531);
      const ageSpecificText = tmpResult.useAgeSpecificText(tmp5, tmp6);
      const tmp12 = useIsInAdultAgeGroupDefault();
      _require = tmp12;
      if (cResult[2] === ageSpecificText) {
        if (cResult[3] === tmp12) {
          if (cResult[4] === tmp4.container) {
            if (cResult[5] === tmp4.groupHeader) {
              tmp13 = cResult[6];
              tmp14 = cResult[7];
              tmp15 = cResult[8];
              tmp16 = cResult[9];
              tmp17 = cResult[10];
              tmp18 = cResult[11];
            }
            if (cResult[17] === tmp13) {
              if (cResult[18] === tmp16) {
                if (cResult[19] === tmp17) {
                  let tmp24;
                  if (cResult[20] === tmp18) {
                    tmp24 = cResult[21];
                  }
                  if (cResult[22] === tmp14) {
                    let tmp27;
                    let tmp30;
                    if (cResult[23] === tmp24) {
                      tmp27 = cResult[24];
                    }
                    const _Symbol = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj2 = { children: closure_6(Button, obj3) };
                      const ModalFooter = tmp(11536).ModalFooter;
                      obj3 = {
                        variant: "primary",
                        text: intl3.string(tmp(1126).t["NX+WJN"]),
                        onPress: ModalActionCreatorsDefault.pop,
                      };
                      Button = tmp(5594).Button;
                      intl3 = tmp(1126).intl;
                      const tmp32 = closure_6(ModalFooter, obj2);
                      cResult[25] = tmp32;
                      tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[25];
                    }
                    if (cResult[26] === tmp15) {
                      let tmp33;
                      if (cResult[27] === tmp27) {
                        tmp33 = cResult[28];
                      }
                      return tmp33;
                    }
                    const obj4 = { children: items };
                    items = [tmp27, tmp30];
                    const tmp35 = closure_7(tmp15, obj4);
                    cResult[26] = tmp15;
                    cResult[27] = tmp27;
                    cResult[28] = tmp35;
                    tmp33 = tmp35;
                  }
                  const obj5 = { children: tmp24 };
                  const tmp29 = closure_6(tmp14, obj5);
                  cResult[22] = tmp14;
                  cResult[23] = tmp24;
                  cResult[24] = tmp29;
                  tmp27 = tmp29;
                }
              }
            }
            const obj6 = { style: tmp16, children: items1 };
            items1 = [tmp17, tmp18];
            const tmp26 = closure_7(tmp13, obj6);
            cResult[17] = tmp13;
            cResult[18] = tmp16;
            cResult[19] = tmp17;
            cResult[20] = tmp18;
            cResult[21] = tmp26;
            tmp24 = tmp26;
          }
        }
      }
      const tmpResult2 = tmp(8298);
      const sortedActivityTypeConfigs = tmpResult2.getSortedActivityTypeConfigs();
      const ModalScreen = tmp(8095).ModalScreen;
      const ModalContent = tmp(8096).ModalContent;
      const container = tmp4.container;
      if (cResult[12] === ageSpecificText) {
        let tmp20;
        if (cResult[13] === tmp4.groupHeader) {
          tmp20 = cResult[14];
        }
        if (cResult[15] !== tmp12) {
          class N {
            constructor(arg0) {
              tmp = closure_3(arg0, 2);
              [tmp2, obj] = tmp;
              obj1 = { IconComponent: closure_8[tmp2], header: obj.tooltipHeader(), description: null };
              tmp3 = jsx;
              tmp4 = f68323;
              tmp5 = closure_0;
              tooltipDescription = obj.tooltipDescription;
              obj1.description = tooltipDescription(tmp5);
              return tmp3(tmp4, obj1, tmp2);
            }
          }
          cResult[15] = tmp12;
          cResult[16] = N;
        } else {
          class N {
            constructor(arg0) {
              tmp = closure_3(arg0, 2);
              [tmp2, obj] = tmp;
              obj1 = { IconComponent: closure_8[tmp2], header: obj.tooltipHeader(), description: null };
              tmp3 = jsx;
              tmp4 = f68323;
              tmp5 = closure_0;
              tooltipDescription = obj.tooltipDescription;
              obj1.description = tooltipDescription(tmp5);
              return tmp3(tmp4, obj1, tmp2);
            }
          }
        }
        const mapped = sortedActivityTypeConfigs.map(N);
        cResult[2] = ageSpecificText;
        cResult[3] = tmp12;
        cResult[4] = tmp4.container;
        cResult[5] = tmp4.groupHeader;
        cResult[6] = View;
        cResult[7] = ModalContent;
        cResult[8] = ModalScreen;
        cResult[9] = container;
        cResult[10] = tmp20;
        cResult[11] = mapped;
        tmp18 = mapped;
        tmp17 = tmp20;
        tmp16 = container;
        tmp15 = ModalScreen;
        tmp14 = ModalContent;
        tmp13 = View;
      }
      const obj7 = {
        style: tmp4.groupHeader,
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        children: ageSpecificText,
      };
      const tmp21 = closure_6(tmp(4886).Text, obj7);
      cResult[12] = ageSpecificText;
      cResult[13] = tmp4.groupHeader;
      cResult[14] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let Button;
      let closure_0;
      let intl3;
      let items;
      let items1;
      let obj4;
      let obj7;
      const tmp = closure_11();
      const useAgeSpecificText = require("useAgeSpecificText").useAgeSpecificText;
      require("useAgeSpecificText");
      const intl = require("intl").intl;
      const stringResult = intl.string(_modDef2493.n6LOrh);
      const intl2 = require("intl").intl;
      const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2493.JNLpDZ));
      _require = useIsInAdultAgeGroupDefault();
      obj = require("FamilyCenterUtils");
      const sortedActivityTypeConfigs = obj.getSortedActivityTypeConfigs();
      let obj2 = { children: items1 };
      const ModalScreen = require("ModalScreen").ModalScreen;
      const obj3 = { children: closure_7(View, obj4) };
      obj4 = { style: tmp.container, children: items };
      const ModalContent = require("ModalContent").ModalContent;
      items = [,];
      const obj5 = {
        style: tmp.groupHeader,
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        children: ageSpecificText,
      };
      items[0] = closure_6(require("Text/Text").Text, obj5);
      items[1] = sortedActivityTypeConfigs.map((item) => {
        let tmp;
        let tooltipDescription;
        [tmp, obj] = item;
        const obj2 = {
          IconComponent: obj[tmp],
          header: obj.tooltipHeader(),
          description: tooltipDescription(closure_0),
        };
        tooltipDescription = obj.tooltipDescription;
        return metroRequire(closure_10, obj2, tmp);
      });
      items1 = [closure_6(ModalContent, obj3)];
      const obj6 = { children: closure_6(Button, obj7) };
      const ModalFooter = require("ModalFooter").ModalFooter;
      obj7 = {
        variant: "primary",
        text: intl3.string(require("intl").t["NX+WJN"]),
        onPress: ModalActionCreatorsDefault.pop,
      };
      Button = require("components/Button/Button").Button;
      intl3 = require("intl").intl;
      items1[1] = closure_6(ModalFooter, obj6);
      return closure_7(ModalScreen, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let obj3;
      let tmp6;
      let tmpResult;
      obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { DATA_TOOLTIP: obj3 };
        obj3 = {
          headerShown: true,
          headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle,
          render,
        };
        cResult[0] = obj2;
        first = obj2;
        tmpResult = NavigatorHeader;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          initialRouteName: "DATA_TOOLTIP",
          screens: first,
          headerBackTitle: intl.string(intl4.t["13/7kX"]),
        };
        const Modal = Modal2.Modal;
        intl = intl4.intl;
        const tmp8 = metroRequire(Modal, obj4);
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      let intl;
      const memo = react.useMemo(() => {
        let obj2;
        let obj3;
        obj = { DATA_TOOLTIP: obj2 };
        obj2 = {
          headerShown: true,
          headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle,
          render,
        };
        obj3 = require("NavigatorHeader");
        return obj;
      }, []);
      obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: intl.string(intl4.t["13/7kX"]) };
      const Modal = Modal2.Modal;
      intl = intl4.intl;
      return metroRequire(Modal, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default tmp5;
