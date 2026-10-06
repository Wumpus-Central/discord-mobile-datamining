// discord_app/modules/guild_moderation/native/BanConfirm.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import intl7 from "../../../intl/index.native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let banUserResult, catchPromise, guildId, nextPromise, ref, ref2, tmp13, tmp3, tmp4, tmp5, tmp6, tmp7;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj9;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = {
  value: 0,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t["4obaMS"]);
  },
};
let items = [obj, , , , , ,];
let obj2 = {
  value: DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t.RKpitY);
  },
};
items[1] = obj2;
let obj3 = {
  value: 6 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t["8WfJZ8"]);
  },
};
items[2] = obj3;
let obj4 = {
  value: 12 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t.p1up7u);
  },
};
items[3] = obj4;
let obj5 = {
  value: DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t.XuVkkD);
  },
};
items[4] = obj5;
let obj6 = {
  value: 3 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t["gMcDS+"]);
  },
};
items[5] = obj6;
let obj7 = {
  value: 7 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = intl7.intl;
    return intl.string(intl7.t.FA7IUk);
  },
};
items[6] = obj7;
let createStyles = createStyles_mod;
let obj8 = {
  container: obj9,
  iconLabelBlock: obj10,
  iconStyles: obj11,
  blurb: obj12,
  redText: obj13,
  errorText: obj14,
};
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj10 = {
  marginTop: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj11 = { height: 1.25 * nativeDefault.space.PX_96 };
obj12 = { marginVertical: nativeDefault.space.PX_16 };
obj13 = {
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
obj14 = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj8);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        let closure_7;
        let first;
        let onBan;
        let stateFromStores1;
        let tmp10;
        let tmp12;
        let tmp16;
        let tmp9;
        let tmp2 = onBan;
        let obj = guildId(onBan[11]);
        const cResult = obj.c(22);
        guildId = guildId.guildId;
        const userId = guildId.userId;
        onBan = guildId.onBan;
        closure_14();
        ref = stateFromStores1.useRef(null);
        const ref1 = stateFromStores1.useRef(null);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { includeKeyboardHeight: true };
          cResult[0] = obj3;
          first = obj3;
        } else {
          first = cResult[0];
        }
        const insets = userId(tmp2[12])(first).insets;
        const tmp8 = userId;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          items = [{ ref: ref1, offset: { type: "toBottom" } }];
          const obj4 = { ref: ref1, offset: { type: "toBottom" } };
          cResult[1] = items;
          tmp9 = items;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== insets) {
          const obj5 = { insets, inputs: tmp9, scrollViewRef: ref };
          cResult[2] = insets;
          cResult[3] = obj5;
          tmp10 = obj5;
        } else {
          tmp10 = cResult[3];
        }
        tmp8(tmp2[13])(tmp10);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildStore];
          cResult[4] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] !== guildId) {
          class I {
            constructor() {
              return closure_8.getGuild(guildId);
            }
          }
          cResult[5] = guildId;
          cResult[6] = I;
        } else {
          class I {
            constructor() {
              return closure_8.getGuild(guildId);
            }
          }
        }
        const tmpResult = guildId(tmp2[14]);
        const stateFromStores = tmpResult.useStateFromStores(tmp12, I);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              return closure_8.getGuild(guildId);
            }
          }
          const items2 = [UserStore];
          cResult[7] = items2;
          tmp16 = items2;
        } else {
          class I {
            constructor() {
              return closure_8.getGuild(guildId);
            }
          }
        }
        if (cResult[8] !== userId) {
          class I {
            constructor() {
              return closure_8.getGuild(guildId);
            }
          }
          cResult[8] = userId;
          cResult[9] = tmp18;
        } else {
          class I {
            constructor() {
              return closure_8.getGuild(guildId);
            }
          }
        }
        const tmpResult2 = guildId(tmp2[14]);
        stateFromStores1 = tmpResult2.useStateFromStores(tmp16, tmp18);
        ref = obj2.useRef(0);
        ref2 = obj2.useRef("");
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor() {
              return { banning: false, banError: false };
            }
          }
          cResult[10] = V;
        } else {
          class V {
            constructor() {
              return { banning: false, banError: false };
            }
          }
        }
        [r10103, closure_7] = stateFromStores(stateFromStores1.useState(V), 2);
        stateFromStores(stateFromStores1.useState(V), 2);
        if (cResult[11] === stateFromStores) {
          class V {
            constructor() {
              return { banning: false, banError: false };
            }
          }
        }
        class M {
          constructor() {
            tmp2 = null != closure_3;
            tmp = closure_3;
            if (tmp2) {
              tmp3 = closure_4;
              tmp2 = null != closure_4;
            }
            if (tmp2) {
              tmp4 = closure_7;
              tmp5 = closure_7({ banning: true, banError: false });
              tmp6 = closure_1;
              tmp7 = closure_2;
              obj = closure_1(closure_2[15]);
              tmp8 = closure_4;
              tmp9 = closure_13;
              tmp10 = closure_5;
              tmp11 = closure_6;
              tmp12 = obj;
              banUserResult = obj.banUser(tmp.id, closure_4.id, closure_13[closure_5.current].value, closure_6.current);
              tmp13 = onBan;
              nextPromise = banUserResult.then(onBan);
              catchPromise = nextPromise.catch(() => {
                /* body not rendered: F141601 */
              });
            }
            return;
          }
        }
        cResult[11] = stateFromStores;
        cResult[12] = onBan;
        cResult[13] = stateFromStores1;
        cResult[14] = M;
      }
    : (arg0) => {
        let Button;
        let Qd6w7T;
        let _undefined;
        let c7;
        let format;
        let format2;
        let format3;
        let intl3;
        let intl4;
        let intl5;
        let items4;
        let obj12;
        let obj15;
        let obj17;
        let obj18;
        let obj20;
        let obj21;
        let obj5;
        let obj9;
        let onBan;
        let prop;
        let tmp11;
        let tmp4Result;
        let tmp4Result3;
        let tmp4Result4;
        let v8jV9fx;
        const f108034 = () => ({ banning: false, banError: false });
        ({ guildId: require, userId: importDefault, onBan } = arg0);
        let stateFromStores1;
        c7 = undefined;
        const tmp = closure_14();
        ref = stateFromStores1.useRef(null);
        const ref1 = stateFromStores1.useRef(null);
        const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
        let obj = { insets, inputs: items, scrollViewRef: ref };
        items = [{ ref: ref1, offset: { type: "toBottom" } }];
        require("useSafeAreaAvoidingInputs")(obj);
        const items1 = [GuildStore];
        const obj2 = require("get initialized");
        const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(require));
        const items2 = [UserStore];
        const obj3 = require("get initialized");
        stateFromStores1 = obj3.useStateFromStores(items2, () => UserStore.getUser(importDefault));
        ref = stateFromStores1.useRef(0);
        ref2 = stateFromStores1.useRef("");
        [tmp11, c7] = stateFromStores(stateFromStores1.useState(f108034), 2);
        const items3 = [stateFromStores, stateFromStores1, onBan];
        let tmp14Result2 = null;
        stateFromStores(stateFromStores1.useState(f108034), 2);
        if (null != stateFromStores1) {
          tmp14Result2 = null;
          if (null != stateFromStores) {
            const obj4 = {
              style: tmp.container,
              ref,
              contentContainerStyle: obj5,
              children: closure_11(closure_12, obj21),
            };
            obj5 = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
            const obj6 = { style: tmp.iconLabelBlock, children: items4 };
            const obj7 = { style: tmp.iconStyles, source: require("AssetRegistry"), resizeMode: "contain" };
            items4 = [closure_10(ref, obj7), ,];
            const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: format(Qd6w7T, obj9) };
            const Text = require("Text/Text").Text;
            const intl = require("intl").intl;
            format = intl.format;
            obj9 = { username: tmp4Result.getName(stateFromStores1) };
            Qd6w7T = require("intl").t.Qd6w7T;
            tmp4Result = require("UserUtils");
            items4[1] = closure_10(Text, obj8);
            const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
            items4[2] = closure_10(require("Text/Text").Text, obj10);
            const items5 = [closure_11(ref2, obj6), , , , ,];
            const obj11 = {
              style: tmp.blurb,
              variant: "heading-md/normal",
              color: "text-feedback-warning",
              children: format2(v8jV9fx, obj12),
            };
            const Text2 = require("Text/Text").Text;
            const intl2 = require("intl").intl;
            format2 = intl2.format;
            obj12 = { user: tmp4Result3.getName(stateFromStores1) };
            v8jV9fx = require("intl").t["8jV9fx"];
            tmp4Result3 = require("UserUtils");
            items5[1] = closure_10(Text2, obj11);
            const obj13 = {
              title: intl3.string(require("intl").t["8l3W0y"]),
              defaultValue: items[0].value,
              onChange(current) {
                ref.current = current;
              },
              hasIcons: false,
              children: items.map((getLabel, value) => {
                const obj = { value, label: getLabel.getLabel() };
                const TableRadioRow = require("TableRadioRow").TableRadioRow;
                return closure_1_10(TableRadioRow, obj, value);
              }),
            };
            const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
            intl3 = require("intl").intl;
            items5[2] = closure_10(TableRadioGroup, obj13);
            const obj14 = {
              ref: ref1,
              containerStyle: obj15,
              label: intl4.string(require("intl").t.w4Ivys),
              maxLength: 512,
              onChange(current) {
                ref2.current = current;
              },
            };
            obj15 = { marginVertical: require("native").space.PX_16 };
            const TextArea = require("TextArea").TextArea;
            intl4 = require("intl").intl;
            items5[3] = closure_10(TextArea, obj14);
            const obj16 = { style: obj17, children: closure_10(Button, obj18) };
            obj17 = { marginBottom: require("native").space.PX_16 };
            obj18 = {
              variant: "destructive",
              text: intl5.string(require("intl").t["5MBJ5M"]),
              onPress: tmp12,
              disabled: tmp11.banning,
            };
            Button = require("components/Button/Button").Button;
            intl5 = require("intl").intl;
            items5[4] = closure_10(ref2, obj16);
            let tmp14Result = null;
            const tmp15 = c7;
            if (tmp11.banError) {
              const obj19 = {
                style: tmp.errorText,
                variant: "text-md/semibold",
                color: "input-text-error-default",
                children: format3(prop, obj20),
              };
              const Text3 = require("Text/Text").Text;
              const intl6 = require("intl").intl;
              format3 = intl6.format;
              obj20 = { user: tmp4Result4.getName(stateFromStores1) };
              prop = require("intl").t["/K6eer"];
              tmp4Result4 = require("UserUtils");
              tmp14Result = closure_10(Text3, obj19);
            }
            obj21 = { children: items5 };
            items5[5] = tmp14Result;
            tmp14Result2 = closure_10(tmp15, obj4);
          }
        }
        return tmp14Result2;
      },
);
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirm.tsx");

export default memoResult;
