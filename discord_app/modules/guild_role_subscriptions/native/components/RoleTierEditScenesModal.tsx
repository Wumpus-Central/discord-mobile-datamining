// === Module 17936: RoleTierEditScenesModal ===

// Module 17936 (RoleTierEditScenesModal)
import _modDef38 from "module_38" /* 38 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15023 */;
import GuildRoleSubscriptionGroupDetailsModalDefault from "GuildRoleSubscriptionGroupDetailsModal" /* 17925 */;
import GuildRoleSubscriptionGroupGatingModalDefault from "GuildRoleSubscriptionGroupGatingModal" /* 17937 */;
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal" /* 17938 */;
import GuildRoleSubscriptionTierConfirmationModalDefault from "GuildRoleSubscriptionTierConfirmationModal" /* 17959 */;
import GuildRoleSubscriptionTierDesignModalDefault from "GuildRoleSubscriptionTierDesignModal" /* 17962 */;
import GuildRoleSubscriptionTierDetailsModalDefault from "GuildRoleSubscriptionTierDetailsModal" /* 17964 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17926 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
function orderify(scene, arg1) {
  let obj2;
  const sum = arg1 + 1;
  if (typeof scene === "string") {
    obj2 = { stepNumber: sum, scene };
    const obj = { stepNumber: sum, scene };
  } else {
    obj2 = { stepNumber: sum };
    const merged = Object.assign(scene);
  }
  return obj2;
}
function buildScreenMap(modalKey, handleClose) {
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj18;
  let obj5;
  let obj8;
  let stepScreenPropsMap;
  let steps;
  let sum;
  const headerRight = () => {
    let intl;
    obj = {
      source: merged(dependencyMap[8]),
      onPress() {
        return closure_1_1(DETAILS2);
      },
      accessibilityLabel: intl.string(obj(dependencyMap[9]).t.cpT0Cq)
    };
    const HeaderActionButton = obj(dependencyMap[7]).HeaderActionButton;
    intl = obj(dependencyMap[9]).intl;
    return closure_2_8(HeaderActionButton, obj);
  };
  ({ steps, stepScreenPropsMap } = modalKey);
  let obj = {};
  let merged = Object.assign(modalKey, Object.assign({ steps: 0, stepScreenPropsMap: 0 }));
  const mapped = steps.map(orderify);
  let num = 0;
  if (0 < steps.length) {
    do {
      sum = num + 1;
      let tmp5 = mapped[sum];
      let tmp6 = num;
      let scene1;
      let scene = mapped[num].scene;
      if (tmp5 != null) {
        scene1 = tmp5.scene;
      }
      if (scene1 == null) {
        scene1 = null;
      }
      let obj2 = { nextStep: scene1, stepsCount: tmp3 };
      let merged1 = Object.assign(mapped[num]);
      obj[scene] = obj2;
      num = sum;
    } while (sum < steps.length);
  }
  const obj3 = {
    fullscreen: true,
    headerTitle() {
      return null;
    }
  };
  let GATING = constants.GATING;
  const obj4 = {
    headerRight,
    render() {
      const GATING = constants.GATING;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[GATING];
      tmp5(tmp6, "Props not provided in screen map for scene " + GATING);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionGroupGatingModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  let merged2 = Object.assign(obj3);
  const GATING2 = constants.GATING;
  let closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj5 = {};
  } else {
    obj5 = stepScreenPropsMap[tmp12];
    if (obj5 == null) {
      obj5 = {};
    }
  }
  const obj6 = {};
  let merged3 = Object.assign(obj5);
  obj6[GATING] = obj4;
  let GROUP = constants.GROUP;
  const obj7 = {
    headerRight,
    render() {
      const GROUP = constants.GROUP;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[GROUP];
      tmp5(tmp6, "Props not provided in screen map for scene " + GROUP);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionGroupDetailsModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  let merged4 = Object.assign(obj3);
  const GROUP2 = constants.GROUP;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj8 = {};
  } else {
    obj8 = stepScreenPropsMap[tmp15];
    if (obj8 == null) {
      obj8 = {};
    }
  }
  const merged5 = Object.assign(obj8);
  obj6[GROUP] = obj7;
  let CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
  const obj9 = {
    headerRight,
    render() {
      const CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
      const tmp4 = _modDef38;
      const tmp5 = null != obj[CHANNEL_BENEFITS];
      tmp4(tmp5, "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const GuildRoleSubscriptionTierChannelBenefitsModal = GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierChannelBenefitsModal;
      const merged4 = Object.assign(obj);
      return metroImportAll(GuildRoleSubscriptionTierChannelBenefitsModal, obj2);
    }
  };
  const merged6 = Object.assign(obj3);
  const CHANNEL_BENEFITS2 = constants.CHANNEL_BENEFITS;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj10 = {};
  } else {
    obj10 = stepScreenPropsMap[tmp18];
    if (obj10 == null) {
      obj10 = {};
    }
  }
  const merged7 = Object.assign(obj10);
  obj6[CHANNEL_BENEFITS] = obj9;
  let INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
  const obj11 = {
    headerRight,
    render() {
      const INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
      const tmp4 = _modDef38;
      const tmp5 = null != obj[INTANGIBLE_BENEFITS];
      tmp4(tmp5, "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const GuildRoleSubscriptionTierIntangibleBenefitsModal = GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierIntangibleBenefitsModal;
      const merged4 = Object.assign(obj);
      return metroImportAll(GuildRoleSubscriptionTierIntangibleBenefitsModal, obj2);
    }
  };
  const merged8 = Object.assign(obj3);
  const INTANGIBLE_BENEFITS2 = constants.INTANGIBLE_BENEFITS;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj12 = {};
  } else {
    obj12 = stepScreenPropsMap[tmp21];
    if (obj12 == null) {
      obj12 = {};
    }
  }
  const merged9 = Object.assign(obj12);
  obj6[INTANGIBLE_BENEFITS] = obj11;
  let CONFIRMATION = constants.CONFIRMATION;
  const obj13 = {
    headerRight,
    render() {
      const CONFIRMATION = constants.CONFIRMATION;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[CONFIRMATION];
      tmp5(tmp6, "Props not provided in screen map for scene " + CONFIRMATION);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionTierConfirmationModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  const merged10 = Object.assign(obj3);
  const CONFIRMATION2 = constants.CONFIRMATION;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj14 = {};
  } else {
    obj14 = stepScreenPropsMap[tmp24];
    if (obj14 == null) {
      obj14 = {};
    }
  }
  const merged11 = Object.assign(obj14);
  obj6[CONFIRMATION] = obj13;
  let DESIGN = constants.DESIGN;
  const obj15 = {
    headerRight,
    render() {
      const DESIGN = constants.DESIGN;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[DESIGN];
      tmp5(tmp6, "Props not provided in screen map for scene " + DESIGN);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionTierDesignModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  const merged12 = Object.assign(obj3);
  const DESIGN2 = constants.DESIGN;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj16 = {};
  } else {
    obj16 = stepScreenPropsMap[tmp27];
    if (obj16 == null) {
      obj16 = {};
    }
  }
  const merged13 = Object.assign(obj16);
  obj6[DESIGN] = obj15;
  let DETAILS = constants.DETAILS;
  const obj17 = {
    headerRight,
    render() {
      const DETAILS = constants.DETAILS;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[DETAILS];
      tmp5(tmp6, "Props not provided in screen map for scene " + DETAILS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionTierDetailsModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  const merged14 = Object.assign(obj3);
  const DETAILS2 = constants.DETAILS;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj18 = {};
  } else {
    obj18 = stepScreenPropsMap[tmp30];
    if (obj18 == null) {
      obj18 = {};
    }
  }
  const merged15 = Object.assign(obj18);
  obj6[DETAILS] = obj17;
  return obj6;
}
let react = react_mod;
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
let closure_7 = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((modalKey) => {
  let closure_4;
  let closure_9;
  let first;
  let onClose;
  let steps;
  let tmp13;
  let tmp8;
  _require = modalKey;
  let obj = require("react");
  const cResult = obj.c(34);
  closure_11();
  modalKey = modalKey.modalKey;
  ({ steps, onClose } = modalKey);
  let tmp3 = first(closure_5(), 2);
  first = tmp3[0];
  react = tmp5;
  const tmp6 = closure_6();
  closure_5 = tmp6;
  closure_6 = first(react.useState(0), 2)[1];
  first(react.useState(0), 2);
  const top = modalKey(onClose[18])().top;
  if (cResult[0] !== modalKey) {
    const fn = function c() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(modalKey);
    };
    cResult[0] = modalKey;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  closure_7 = tmp8;
  if (cResult[2] === tmp8) {
    if (cResult[3] === onClose) {
      let tmp9;
      if (cResult[4] === tmp6) {
        tmp9 = cResult[5];
      }
      let closure_8 = tmp9;
      if (cResult[6] !== steps) {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(scene) {
              if (typeof scene !== "string") {
                scene = scene.scene;
              }
              return scene;
            }
          }
          let num2 = 8;
          cResult[8] = M;
        } else {
          class M {
            constructor(scene) {
              if (typeof scene !== "string") {
                scene = scene.scene;
              }
              return scene;
            }
          }
        }
        class L {
          constructor(arg0) {
            name = modalKey.route.name;
            if (null != name) {
              tmp = closure_4;
              tmp2 = closure_4(name);
              tmp3 = closure_9;
              findIndexResult = closure_9.findIndex((item) => item === name);
              num = 0;
              if (findIndexResult >= 0) {
                tmp5 = closure_6;
                tmp6 = closure_6(findIndexResult);
              }
            }
            return;
          }
        }
        cResult[6] = steps;
        cResult[7] = tmp13;
      } else {
        class M {
          constructor(scene) {
            if (typeof scene !== "string") {
              scene = scene.scene;
            }
            return scene;
          }
        }
      }
      tmp13 = tmp10;
      if (cResult[9] === tmp10) {
        class M {
          constructor(scene) {
            if (typeof scene !== "string") {
              scene = scene.scene;
            }
            return scene;
          }
        }
        if (cResult[12] === first) {
          class M {
            constructor(scene) {
              if (typeof scene !== "string") {
                scene = scene.scene;
              }
              return scene;
            }
          }
        }
        const fn2 = function x() {
          let tmp3;
          const obj = { screens: buildScreenMap(modalKey, closure_8), initialStack: tmp3 };
          _modDef38(tmp13.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
          if (null == first) {
            const items = [{ name: tmp13[0] }];
            tmp3 = items;
            const obj2 = { name: tmp13[0] };
          } else {
            const items1 = [];
            let num2 = 0;
            tmp3 = items1;
            if (0 < tmp13.length) {
              const obj3 = { name: tmp13[num2] };
              items1.push(obj3);
              tmp3 = items1;
              while (tmp13[num2] !== first) {
                num2 = num2 + 1;
                tmp3 = items1;
                if (num2 < tmp13.length) {
                  continue;
                } else {
                  break;
                }
                break;
              }
            }
          }
          return obj;
        };
        cResult[12] = first;
        class L {
          constructor(arg0) {
            name = modalKey.route.name;
            if (null != name) {
              tmp = closure_4;
              tmp2 = closure_4(name);
              tmp3 = closure_9;
              findIndexResult = closure_9.findIndex((item) => item === name);
              num = 0;
              if (findIndexResult >= 0) {
                tmp5 = closure_6;
                tmp6 = closure_6(findIndexResult);
              }
            }
            return;
          }
        }
        cResult[13] = tmp9;
        cResult[14] = modalKey;
        cResult[15] = tmp10;
        cResult[16] = fn2;
      }
      class L {
        constructor(arg0) {
          name = modalKey.route.name;
          if (null != name) {
            tmp = closure_4;
            tmp2 = closure_4(name);
            tmp3 = closure_9;
            findIndexResult = closure_9.findIndex((item) => item === name);
            num = 0;
            if (findIndexResult >= 0) {
              tmp5 = closure_6;
              tmp6 = closure_6(findIndexResult);
            }
          }
          return;
        }
      }
      cResult[9] = tmp10;
      cResult[10] = tmp3[1];
      cResult[11] = L;
    }
  }
  class B {
    constructor(arg0) {
      if (onClose != null) {
        tmp(arg0);
      }
      closure_7();
      closure_5();
    }
  }
  cResult[2] = tmp8;
  cResult[3] = onClose;
  cResult[4] = tmp6;
  cResult[5] = B;
  tmp9 = B;
}) : ((modalKey) => {
  let closure_5;
  let initialStack;
  let intl;
  let items2;
  let items3;
  let screens;
  const f132621 = () => {
    let tmp3;
    const obj = { screens: buildScreenMap(modalKey, handleClose), initialStack: tmp3 };
    _modDef38(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
    if (null == react) {
      const items = [{ name: memo[0] }];
      tmp3 = items;
      const obj2 = { name: memo[0] };
    } else {
      const items1 = [];
      let num2 = 0;
      tmp3 = items1;
      if (0 < memo.length) {
        const obj3 = { name: memo[num2] };
        items1.push(obj3);
        tmp3 = items1;
        while (memo[num2] !== react) {
          num2 = num2 + 1;
          tmp3 = items1;
          if (num2 < memo.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    return obj;
  };
  _require = modalKey;
  function handleClose(arg0) {
    if (onClose != null) {
      tmp(arg0);
    }
    closure_8();
    closure_6();
  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  const tmp = closure_11();
  const tmp2 = onClose(closure_5(), 2);
  [react, closure_5] = tmp2;
  closure_6 = closure_6();
  let tmp3 = onClose(react.useState(0), 2);
  closure_7 = tmp3[1];
  const first = tmp3[0];
  let items = [modalKey];
  const top = modalKey(steps[18])().top;
  let closure_8 = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(modalKey);
  }, items);
  let items1 = [steps];
  const memo = react.useMemo(() => steps.map((scene) => {
    if (typeof scene !== "string") {
      scene = scene.scene;
    }
    return scene;
  }), items1);
  let obj = { children: items2 };
  ({ screens, initialStack } = modalKey(steps[20])(f132621));
  const tmp5 = modalKey(steps[20])(f132621);
  let obj2 = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus(onDidFocus) {
      const name = onDidFocus.route.name;
      if (null != name) {
        closure_5(name);
        const findIndexResult = memo.findIndex((item) => item === name);
        if (findIndexResult >= 0) {
          closure_7(findIndexResult);
        }
      }
    },
    headerBackTitle: intl.string(require("intl").t["13/7kX"])
  };
  const Navigator = require("Navigator").Navigator;
  intl = require("intl").intl;
  items2 = [closure_8(Navigator, obj2), ];
  let obj3 = { style: items3, current: first + 1, total: memo.length };
  items3 = [tmp.stepsIndicator, { top }];
  items2[1] = closure_8(modalKey(steps[22]), obj3);
  return memo(handleClose, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default tmp4;