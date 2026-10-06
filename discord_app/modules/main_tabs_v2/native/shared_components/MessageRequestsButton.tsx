// discord_app/modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04822_AssetRegistry.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import IconButton2 from "../../../../design/components/Button/native/IconButton.native.tsx";
import IconActionButton from "IconActionButton.tsx";
import _mod15995 from "../../../../design/components/LottieIcon/native/generated/index.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import MessageRequestStore from "../../../message_request/MessageRequestStore.tsx";
import SpamMessageRequestStore from "../../../message_request/SpamMessageRequestStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const IconActionButtonDefault = IconActionButton;
let alternateVariant, color;

let c10;
let c9;
let closure_3 = ["alternateVariant"];
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ buttonContainer: { position: "relative" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let messageRequestsCount;
      let spamChannelsCount;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageRequestStore];
        const fn = function n() {
          return messageRequestsCount.getMessageRequestsCount();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SpamMessageRequestStore];
        const fn2 = function c() {
          return spamChannelsCount.getSpamChannelsCount();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores) {
        let tmp12;
        if (cResult[5] === stateFromStores1) {
          tmp12 = cResult[6];
        }
        return tmp12;
      }
      const obj2 = { requestCount: stateFromStores, spamCount: stateFromStores1 };
      cResult[4] = stateFromStores;
      cResult[5] = stateFromStores1;
      cResult[6] = obj2;
      tmp12 = obj2;
    }
  : () => {
      let items;
      let items1;
      let messageRequestsCount;
      let obj2;
      let obj3;
      let spamChannelsCount;
      const obj = {
        requestCount: obj2.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount()),
        spamCount: obj3.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount()),
      };
      items = [MessageRequestStore];
      items1 = [SpamMessageRequestStore];
      obj2 = get_initialized;
      obj3 = get_initialized;
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const IconComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? (color) => {
      let tmp5;
      let tmp6;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(5);
      color = color.color;
      const ref = react.useRef(null);
      const requestCount = closure_12().requestCount;
      if (cResult[0] !== requestCount) {
        const fn = function n() {
          if (requestCount > 0) {
            if (ref != null) {
              const current = ref.current;
              if (current != null) {
                current.play();
              }
            }
          }
        };
        const items = [requestCount];
        cResult[0] = requestCount;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] !== color) {
        const obj3 = { ref, color, size: "sm", autoPlay: true };
        const tmp10 = React4(_mod15995.MessageRequestLottie, obj3);
        cResult[3] = color;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : (color) => {
      color = color.color;
      const ref = react.useRef(null);
      const requestCount = closure_12().requestCount;
      const items = [requestCount];
      const effect = react.useEffect(() => {
        if (requestCount > 0) {
          if (ref != null) {
            const current = ref.current;
            if (current != null) {
              current.play();
            }
          }
        }
      }, items);
      return React4(_mod15995.MessageRequestLottie, { ref, color, size: "sm", autoPlay: true });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (alternateVariant) => {
      let intl2;
      let intl3;
      let items;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(21);
      if (cResult[0] !== alternateVariant) {
        alternateVariant = alternateVariant.alternateVariant;
        const tmp8 = _objectWithoutProperties(alternateVariant, closure_3);
        cResult[0] = alternateVariant;
        cResult[1] = tmp8;
        cResult[2] = alternateVariant;
        tmp5 = alternateVariant;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = undefined !== tmp5 && tmp5;
      const tmp10 = closure_11();
      const tmp11 = closure_12();
      if (0 === tmp11.requestCount) {
        if (0 === tmp11.spamCount) {
          return null;
        }
      }
      if (tmp9) {
        let tmp27;
        let tmp36;
        if (cResult[3] !== tmp11.requestCount) {
          let str1;
          if (tmp11.requestCount > 0) {
            str1 = str.toString();
          }
          cResult[3] = tmp11.requestCount;
          cResult[4] = str1;
          tmp27 = str1;
        } else {
          tmp27 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          let tmp29;
          let tmp42;
          if (cResult[6] === tmp27) {
            tmp29 = cResult[7];
          }
          if (cResult[8] !== tmp11.requestCount) {
            const tmp43 = str > 0 && React4(IconActionButton.ButtonBadge, { badgePosition: "right" });
            cResult[8] = tmp11.requestCount;
            cResult[9] = tmp43;
            tmp42 = tmp43;
          } else {
            tmp42 = cResult[9];
          }
          if (cResult[10] === tmp10.buttonContainer) {
            if (cResult[11] === tmp29) {
              let tmp45;
              if (cResult[12] === tmp42) {
                tmp45 = cResult[13];
              }
              return tmp45;
            }
          }
          const obj2 = { style: tmp10.buttonContainer, collapsable: false, children: items };
          items = [tmp29, tmp42];
          const tmp48 = authStore(View, obj2);
          cResult[10] = tmp10.buttonContainer;
          cResult[11] = tmp29;
          cResult[12] = tmp42;
          cResult[13] = tmp48;
          tmp45 = tmp48;
        }
        if (null != tmp27) {
          const obj3 = {
            icon: React4(IconComponent, {}),
            variant: "secondary",
            text: tmp27,
            size: "sm",
            accessibilityLabel: intl3.string(intl4.t.e7GWjQ),
          };
          const Button = components_Button_Button.Button;
          intl3 = intl4.intl;
          const merged = Object.assign(tmp4);
          tmp36 = React4(Button, obj3);
        } else {
          const obj4 = {
            variant: "secondary",
            size: "sm",
            icon: React4(IconComponent, {}),
            accessibilityLabel: intl2.string(intl4.t.e7GWjQ),
          };
          const IconButton = IconButton2.IconButton;
          intl2 = intl4.intl;
          const merged1 = Object.assign(tmp4);
          tmp36 = React4(IconButton, obj4);
        }
        cResult[5] = tmp4;
        cResult[6] = tmp27;
        cResult[7] = tmp36;
        tmp29 = tmp36;
      } else {
        let tmp13;
        let tmp15;
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.e7GWjQ);
          cResult[14] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[14];
        }
        if (cResult[15] !== tmp11.requestCount) {
          let str3;
          if (tmp11.requestCount > 0) {
            str3 = str.toString();
          }
          cResult[15] = tmp11.requestCount;
          cResult[16] = str3;
          tmp15 = str3;
        } else {
          tmp15 = cResult[16];
        }
        if (cResult[17] === tmp4) {
          if (cResult[18] === tmp15) {
            let tmp18;
            if (cResult[19] === tmp11.requestCount > 0) {
              tmp18 = cResult[20];
            }
            return tmp18;
          }
        }
        const obj5 = {
          source: AssetRegistryDefault,
          IconComponent,
          accessibilityLabel: tmp13,
          buttonText: tmp15,
          badge: tmp11.requestCount > 0,
          badgePosition: "right",
        };
        const tmp21 = IconActionButtonDefault;
        const merged2 = Object.assign(tmp4);
        const tmp26 = React4(tmp21, obj5);
        cResult[17] = tmp4;
        cResult[18] = tmp15;
        cResult[19] = tmp11.requestCount > 0;
        cResult[20] = tmp26;
        tmp18 = tmp26;
      }
    }
  : (alternateVariant) => {
      let intl;
      let intl2;
      let intl3;
      let items;
      let str2;
      let flag = alternateVariant.alternateVariant;
      if (flag === undefined) {
        flag = false;
      }
      const merged = Object.assign(alternateVariant, Object.assign({ alternateVariant: 0 }));
      const tmp2 = closure_11();
      const tmp3 = closure_12();
      if (0 === tmp3.requestCount) {
        if (0 === tmp3.spamCount) {
          return null;
        }
      }
      if (flag) {
        let tmp24;
        let tmp26;
        let tmp27;
        let str1;
        if (tmp3.requestCount > 0) {
          str1 = str.toString();
        }
        const obj2 = { style: tmp2.buttonContainer, collapsable: false, children: items };
        if (null != str1) {
          const obj3 = {
            icon: React4(IconComponent, {}),
            variant: "secondary",
            text: str1,
            size: "sm",
            accessibilityLabel: intl2.string(intl4.t.e7GWjQ),
          };
          const Button = components_Button_Button.Button;
          intl2 = intl4.intl;
          const merged1 = Object.assign(merged);
          tmp24 = React4(Button, obj3);
          tmp26 = require;
          tmp27 = React4;
        } else {
          tmp27 = React4;
          tmp26 = require;
          const obj4 = {
            variant: "secondary",
            size: "sm",
            icon: React4(IconComponent, {}),
            accessibilityLabel: intl3.string(intl4.t.e7GWjQ),
          };
          const IconButton = IconButton2.IconButton;
          intl3 = intl4.intl;
          const merged2 = Object.assign(merged);
          tmp24 = React4(IconButton, obj4);
        }
        items = [tmp24, tmp3.requestCount > 0 && tmp27(tmp26(13116).ButtonBadge, { badgePosition: "right" })];
        tmp3.requestCount > 0 && tmp27(tmp26(13116).ButtonBadge, { badgePosition: "right" });
        return authStore(View, obj2);
      } else {
        const obj = {
          source: AssetRegistryDefault,
          IconComponent,
          accessibilityLabel: intl.string(intl4.t.e7GWjQ),
          buttonText: str2,
          badge: tmp3.requestCount > 0,
          badgePosition: "right",
        };
        const tmp7 = IconActionButtonDefault;
        intl = intl4.intl;
        str2 = undefined;
        if (tmp3.requestCount > 0) {
          str2 = str.toString();
        }
        const merged3 = Object.assign(merged);
        return React4(tmp7, obj);
      }
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default tmp3;
