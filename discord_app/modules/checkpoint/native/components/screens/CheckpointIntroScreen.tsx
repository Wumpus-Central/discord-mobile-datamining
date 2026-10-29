// discord_app/modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef3090 from "../../../Checkpoint2026.messages.js";
import CheckpointStore2 from "../../../CheckpointStore.tsx";
import CheckpointTextDefault from "../CheckpointText.tsx";
import CheckpointScreenDefault from "../CheckpointScreen.tsx";
import CheckpointStatNumberDefault from "../CheckpointStatNumber.tsx";
import CheckpointGlobeAnimationDefault from "../CheckpointGlobeAnimation.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const CheckpointStore = CheckpointStore2;

const View = _mod17.View;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "2026";
let obj = {
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    gap: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_64,
  },
  year: null,
  globe: null,
  descriptions: null,
};
let obj2 = {
  flexGrow: 1,
  justifyContent: "flex-end",
  gap: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_64,
};
obj.year = {
  flexDirection: "row",
  alignItems: "center",
  columnGap: nativeDefault.space.PX_8,
  marginTop: -nativeDefault.space.PX_8,
  marginBottom: -nativeDefault.space.PX_4,
};
obj.globe = { width: 75, height: 56 };
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  columnGap: nativeDefault.space.PX_8,
  marginTop: -nativeDefault.space.PX_8,
  marginBottom: -nativeDefault.space.PX_4,
};
obj.descriptions = { gap: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { gap: nativeDefault.space.PX_32 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointIntroScreen() {
      const cResult = c.c(23);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function u() {
          let tmp = CheckpointStore.fetchState !== constants.SUCCESS;
          if (!tmp) {
            tmp = null != CheckpointStore.stats;
          }
          return tmp;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { value, size: 96, isStepHeading: true };
        const tmp13 = timestampProducer(CheckpointStatNumberDefault, obj2);
        cResult[2] = tmp13;
        let tmp9 = tmp13;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === tmp4.globe) {
          let tmp14 = cResult[5];
        }
        if (cResult[6] === tmp4.year) {
          if (cResult[7] === tmp14) {
            let tmp18 = cResult[8];
          }
          if (cResult[9] !== stateFromStores) {
            const intl = util.intl;
            const tmp25 = _modDef3090;
            const stringResult = intl.string(stateFromStores ? tmp25["7YmUVu"] : tmp25["Fyr+NW"]);
            cResult[9] = stateFromStores;
            cResult[10] = stringResult;
          } else {
            if (cResult[11] !== cResult[10]) {
              const obj3 = { variant: "heading-lg/medium", children: tmp23 };
              const tmp31 = timestampProducer(CheckpointTextDefault, obj3);
              cResult[11] = tmp23;
              cResult[12] = tmp31;
              let tmp28 = tmp31;
            } else {
              tmp28 = cResult[12];
            }
            if (cResult[13] !== stateFromStores) {
              let tmp33 = !stateFromStores;
              if (!stateFromStores) {
                const obj4 = { variant: "heading-lg/medium", children: null };
                const intl2 = util.intl;
                obj4.children = intl2.string(_modDef3090["2GRr6H"]);
                tmp33 = timestampProducer(CheckpointTextDefault, obj4);
              }
              cResult[13] = stateFromStores;
              cResult[14] = tmp33;
              let tmp32 = tmp33;
            } else {
              tmp32 = cResult[14];
            }
            if (cResult[15] === tmp4.descriptions) {
              if (cResult[16] === tmp28) {
                if (cResult[17] === tmp32) {
                  let tmp37 = cResult[18];
                }
                if (cResult[19] === tmp4.container) {
                  if (cResult[20] === tmp37) {
                    if (cResult[21] === tmp18) {
                      let tmp41 = cResult[22];
                    }
                    return tmp41;
                  }
                }
                const obj5 = { children: null };
                const obj6 = { style: tmp4.container, children: null };
                const items1 = [tmp18, tmp37];
                obj6.children = items1;
                obj5.children = React5(View, obj6);
                const tmp47 = timestampProducer(CheckpointScreenDefault, obj5);
                cResult[19] = tmp4.container;
                cResult[20] = tmp37;
                cResult[21] = tmp18;
                cResult[22] = tmp47;
                tmp41 = tmp47;
              }
            }
            const obj7 = { style: tmp22, children: null };
            const items2 = [tmp28, tmp32];
            obj7.children = items2;
            const tmp40 = React5(View, obj7);
            cResult[15] = tmp4.descriptions;
            cResult[16] = tmp28;
            cResult[17] = tmp32;
            cResult[18] = tmp40;
            tmp37 = tmp40;
          }
        }
        const obj8 = { style: tmp4.year, children: null };
        const items3 = [tmp9, tmp14];
        obj8.children = items3;
        const tmp21 = React5(View, obj8);
        cResult[6] = tmp4.year;
        cResult[7] = tmp14;
        cResult[8] = tmp21;
        tmp18 = tmp21;
      }
      let tmp15 = !stateFromStores;
      if (!stateFromStores) {
        const obj9 = { style: tmp4.globe };
        tmp15 = timestampProducer(CheckpointGlobeAnimationDefault, obj9);
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp4.globe;
      cResult[5] = tmp15;
      tmp14 = tmp15;
      const tmpResult = initialize;
    }
  : function CheckpointIntroScreen() {
      let tmp = closure_9();
      const items = [CheckpointStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        let tmp = CheckpointStore.fetchState !== constants.SUCCESS;
        if (!tmp) {
          tmp = null != CheckpointStore.stats;
        }
        return tmp;
      });
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.year, children: null };
      const items1 = [timestampProducer(CheckpointStatNumberDefault, { value, size: 96, isStepHeading: true })];
      let tmp5Result = !stateFromStores;
      if (!stateFromStores) {
        const obj5 = { style: tmp.globe };
        tmp5Result = timestampProducer(CheckpointGlobeAnimationDefault, obj5);
      }
      items1[1] = tmp5Result;
      obj3.children = items1;
      const items2 = [React5(View, obj3)];
      const obj6 = { style: tmp.descriptions, children: null };
      const obj4 = { value, size: 96, isStepHeading: true };
      const tmp7 = CheckpointScreenDefault;
      const intl = util.intl;
      const tmp6Result3 = _modDef3090;
      const tmp6Result = CheckpointTextDefault;
      const items3 = [
        timestampProducer(tmp6Result, {
          variant: "heading-lg/medium",
          children: intl.string(stateFromStores ? tmp6Result3["7YmUVu"] : tmp6Result3["Fyr+NW"]),
        }),
      ];
      let tmp5Result2 = !stateFromStores;
      if (!stateFromStores) {
        const obj8 = { variant: "heading-lg/medium", children: null };
        const intl2 = util.intl;
        obj8.children = intl2.string(_modDef3090["2GRr6H"]);
        tmp5Result2 = timestampProducer(CheckpointTextDefault, obj8);
        const tmp6Result4 = CheckpointTextDefault;
      }
      const obj9 = { children: null };
      items3[1] = tmp5Result2;
      obj6.children = items3;
      items2[1] = React5(View, obj6);
      obj2.children = items2;
      obj9.children = React5(View, obj2);
      return timestampProducer(tmp7, obj9);
    };
