// discord_app/modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import Modal from "../../../design/components/Modal/native/Modal.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  [USER_INTERACTION]: fn(5855).ChatIcon,
  [USER_CALLED]: fn(11532).PhoneIcon,
  [USER_ADD]: fn(4831).FriendsIcon,
  [GUILD_ADD]: fn(13392).ServerGridIcon,
  [GUILD_INTERACTION]: fn(5857).ThreadIcon,
  [PURCHASES]: fn(8127).CreditCardIcon,
  [TOTAL_VOICE_MINUTES]: fn(4849).ClockIcon,
  [GIFTS]: fn(10766).GiftIcon,
};
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } =
  fn(7049).TeenActionDisplayType);
let createStyles = fn(4890);
let obj3 = {
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
  },
  content: { flexShrink: 1 },
  iconContainer: null,
  header: null,
  icon: null,
};
let size = {
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
obj3.iconContainer = size;
let obj4 = {
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
obj3.header = { marginBottom: nativeDefault.space.PX_4 };
let obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj3.icon = { tintColor: nativeDefault.colors.TEXT_BRAND };
let closure_9 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(19);
      ({ header, description, IconComponent } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] === IconComponent) {
        if (cResult[1] === tmp4.icon) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.iconContainer) {
          if (cResult[4] === tmp5) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === header) {
            if (cResult[7] === tmp4.header) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] !== description) {
              const obj2 = { variant: "text-xs/medium", color: "text-default", children: description };
              const tmp16 = timestampProducer(Text_Text.Text, obj2);
              cResult[9] = description;
              cResult[10] = tmp16;
              let tmp14 = tmp16;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp4.content) {
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp14) {
                  let tmp17 = cResult[14];
                }
                if (cResult[15] === tmp4.row) {
                  if (cResult[16] === tmp7) {
                    if (cResult[17] === tmp17) {
                      let tmp21 = cResult[18];
                    }
                    return tmp21;
                  }
                }
                const obj3 = { style: tmp4.row, children: null };
                const items = [tmp7, tmp17];
                obj3.children = items;
                const tmp24 = React5(View, obj3);
                cResult[15] = tmp4.row;
                cResult[16] = tmp7;
                cResult[17] = tmp17;
                cResult[18] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj4 = { style: tmp4.content, children: null };
            const items1 = [tmp11, tmp14];
            obj4.children = items1;
            const tmp20 = React5(View, obj4);
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
          const tmp13 = timestampProducer(Text_Text.Text, obj5);
          cResult[6] = header;
          cResult[7] = tmp4.header;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
        const obj6 = { style: tmp4.iconContainer, children: tmp5 };
        const tmp10 = timestampProducer(View, obj6);
        cResult[3] = tmp4.iconContainer;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = timestampProducer(IconComponent, { style: tmp4.icon });
      cResult[0] = IconComponent;
      cResult[1] = tmp4.icon;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj7 = { style: tmp4.icon };
    }
  : (arg0) => {
      ({ header, description, IconComponent } = arg0);
      const tmp = closure_9();
      obj = { style: tmp.row, children: null };
      const obj2 = { style: tmp.iconContainer, children: timestampProducer(IconComponent, { style: tmp.icon }) };
      const items = [timestampProducer(View, obj2)];
      const obj4 = { style: tmp.content, children: null };
      const items1 = [
        timestampProducer(Text_Text.Text, {
          style: tmp.header,
          variant: "text-sm/bold",
          color: "mobile-text-heading-primary",
          children: header,
        }),
        timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: description }),
      ];
      obj4.children = items1;
      items[1] = React5(View, obj4);
      obj.children = items;
      return React5(View, obj);
    };
createStyles = fn(4890);
let obj7 = { container: null, groupHeader: null };
let obj6 = { tintColor: nativeDefault.colors.TEXT_BRAND };
obj7.container = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
const obj10 = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj7.groupHeader = { marginBottom: nativeDefault.space.PX_24 };
let closure_11 = createStyles.createStyles(obj7);
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = container(576).c(29);
      let groupHeader = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef2493.n6LOrh);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(_modDef2493.JNLpDZ);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      obj = container(576);
      const ageSpecificText = container(11531).useAgeSpecificText(tmp4, tmp5);
      container = useIsInAdultAgeGroupDefault();
      if (cResult[2] === ageSpecificText) {
        if (cResult[3] === container) {
          if (cResult[4] === groupHeader.container) {
            if (cResult[5] === groupHeader.groupHeader) {
              if (cResult[17] === cResult[6]) {
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp15) {
                    if (cResult[20] === tmp16) {
                      let tmp28 = cResult[21];
                    }
                    if (cResult[22] === tmp12) {
                      if (cResult[23] === tmp28) {
                        let tmp31 = cResult[24];
                      }
                      const _Symbol = Symbol;
                      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                        let obj2 = { children: null };
                        const obj3 = { variant: "primary", text: null, onPress: null };
                        const intl3 = tmp(1126).intl;
                        obj3.text = intl3.string(tmp(1126).t["NX+WJN"]);
                        obj3.onPress = ModalActionCreatorsDefault.pop;
                        obj2.children = closure_6(tmp(5594).Button, obj3);
                        const tmp36 = closure_6(tmp(11536).ModalFooter, obj2);
                        cResult[25] = tmp36;
                        let tmp34 = tmp36;
                      } else {
                        tmp34 = cResult[25];
                      }
                      if (cResult[26] === tmp13) {
                        if (cResult[27] === tmp31) {
                          let tmp37 = cResult[28];
                        }
                        return tmp37;
                      }
                      const obj4 = { children: null };
                      const items = [tmp31, tmp34];
                      obj4.children = items;
                      const tmp39 = closure_7(tmp13, obj4);
                      cResult[26] = tmp13;
                      cResult[27] = tmp31;
                      cResult[28] = tmp39;
                      tmp37 = tmp39;
                    }
                    const obj5 = { children: tmp28 };
                    const tmp33 = closure_6(tmp12, obj5);
                    cResult[22] = tmp12;
                    cResult[23] = tmp28;
                    cResult[24] = tmp33;
                    tmp31 = tmp33;
                  }
                }
              }
              const obj6 = { style: cResult[9], children: null };
              const items1 = [cResult[10], cResult[11]];
              obj6.children = items1;
              const tmp30 = closure_7(cResult[6], obj6);
              cResult[17] = cResult[6];
              cResult[18] = cResult[9];
              cResult[19] = cResult[10];
              cResult[20] = cResult[11];
              cResult[21] = tmp30;
              tmp28 = tmp30;
            }
          }
        }
      }
      const tmpResult = container(11531);
      const sortedActivityTypeConfigs = container(8298).getSortedActivityTypeConfigs();
      const ModalScreen = tmp(8095).ModalScreen;
      const ModalContent = tmp(8096).ModalContent;
      const container2 = groupHeader.container;
      if (cResult[12] === ageSpecificText) {
        if (cResult[13] === groupHeader.groupHeader) {
          let tmp18 = cResult[14];
        }
        if (cResult[15] !== container) {
          class N {
            constructor(arg0) {
              tmp = closure_3(arg0, 2);
              [tmp2, obj] = tmp;
              obj1 = { IconComponent: closure_8[tmp2], header: obj.tooltipHeader(), description: null };
              tmp3 = jsx;
              tmp4 = f68273;
              tmp5 = closure_0;
              obj1.description = obj.tooltipDescription(tmp5);
              return tmp3(tmp4, obj1, tmp2);
            }
          }
          cResult[15] = container;
          cResult[16] = N;
        } else {
          class N {
            constructor(arg0) {
              tmp = closure_3(arg0, 2);
              [tmp2, obj] = tmp;
              obj1 = { IconComponent: closure_8[tmp2], header: obj.tooltipHeader(), description: null };
              tmp3 = jsx;
              tmp4 = f68273;
              tmp5 = closure_0;
              obj1.description = obj.tooltipDescription(tmp5);
              return tmp3(tmp4, obj1, tmp2);
            }
          }
        }
        const mapped = sortedActivityTypeConfigs.map(N);
        cResult[2] = ageSpecificText;
        cResult[3] = container;
        container = groupHeader.container;
        cResult[4] = container;
        groupHeader = groupHeader.groupHeader;
        cResult[5] = groupHeader;
        cResult[6] = View;
        cResult[7] = ModalContent;
        cResult[8] = ModalScreen;
        cResult[9] = container2;
        cResult[10] = tmp18;
        cResult[11] = mapped;
      }
      const tmp19 = closure_6(container(4886).Text, {
        style: groupHeader.groupHeader,
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        children: ageSpecificText,
      });
      cResult[12] = ageSpecificText;
      cResult[13] = groupHeader.groupHeader;
      cResult[14] = tmp19;
      tmp18 = tmp19;
      const obj7 = {
        style: groupHeader.groupHeader,
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        children: ageSpecificText,
      };
      const tmpResult2 = container(8298);
    }
  : () => {
      const tmp = closure_11();
      const intl = require("util").intl;
      obj = require("useAgeSpecificText");
      const intl2 = require("util").intl;
      const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2493.n6LOrh), intl2.string(_modDef2493.JNLpDZ));
      _require = useIsInAdultAgeGroupDefault();
      const stringResult = intl.string(_modDef2493.n6LOrh);
      const sortedActivityTypeConfigs = require("FamilyCenterUtils").getSortedActivityTypeConfigs();
      const obj3 = { children: null };
      const obj4 = { children: null };
      const obj5 = { style: tmp.container, children: null };
      const items = [
        closure_6(require("Text/Text").Text, {
          style: tmp.groupHeader,
          variant: "text-lg/bold",
          color: "mobile-text-heading-primary",
          children: ageSpecificText,
        }),
        sortedActivityTypeConfigs.map((item) => {
          [tmp, obj] = item;
          const obj2 = {
            IconComponent: obj[tmp],
            header: obj.tooltipHeader(),
            description: obj.tooltipDescription(closure_0),
          };
          return timestampProducer(closure_10, obj2, tmp);
        }),
      ];
      obj5.children = items;
      obj4.children = closure_7(View, obj5);
      const items1 = [closure_6(require("ModalContent").ModalContent, obj4)];
      const obj7 = { children: null };
      const obj8 = { variant: "primary", text: null, onPress: null };
      const intl3 = require("util").intl;
      obj8.text = intl3.string(require("util").t["NX+WJN"]);
      obj8.onPress = ModalActionCreatorsDefault.pop;
      obj7.children = closure_6(require("components/Button/Button").Button, obj8);
      items1[1] = closure_6(require("ModalFooter").ModalFooter, obj7);
      obj3.children = items1;
      return closure_7(require("ModalScreen").ModalScreen, obj3);
    };
ReactCompilerGating = fn(558);
const obj11 = { marginBottom: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { DATA_TOOLTIP: null };
        const obj3 = {
          headerShown: true,
          headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_6(closure_1_12, {});
          },
        };
        obj2.DATA_TOOLTIP = obj3;
        cResult[0] = obj2;
        let first = obj2;
        const tmpResult = NavigatorHeader;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { initialRouteName: "DATA_TOOLTIP", screens: first, headerBackTitle: null };
        const intl = util.intl;
        obj4.headerBackTitle = intl.string(util.t["13/7kX"]);
        const tmp8 = timestampProducer(Modal.Modal, obj4);
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      const memo = noop.useMemo(() => {
        obj = { DATA_TOOLTIP: null };
        const obj2 = {
          headerShown: true,
          headerLeft: require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_6(closure_1_12, {});
          },
        };
        obj.DATA_TOOLTIP = obj2;
        return obj;
      }, []);
      obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: null };
      const intl = util.intl;
      obj.headerBackTitle = intl.string(util.t["13/7kX"]);
      return timestampProducer(Modal.Modal, obj);
    };
