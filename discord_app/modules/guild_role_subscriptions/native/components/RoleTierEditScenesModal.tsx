// discord_app/modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import util from "../../../../intl/index.native.tsx";
import _modDef4809 from "../../../../../_runtime/metro/04809__.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import GuildRoleSubscriptionGroupDetailsModalDefault from "GuildRoleSubscriptionGroupDetailsModal.tsx";
import GuildRoleSubscriptionGroupGatingModalDefault from "../guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx";
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal.tsx";
import GuildRoleSubscriptionTierConfirmationModalDefault from "GuildRoleSubscriptionTierConfirmationModal.tsx";
import GuildRoleSubscriptionTierDesignModalDefault from "GuildRoleSubscriptionTierDesignModal.tsx";
import GuildRoleSubscriptionTierDetailsModalDefault from "GuildRoleSubscriptionTierDetailsModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function orderify(scene, arg1) {
  const sum = arg1 + 1;
  if (typeof scene === "string") {
    const obj = { stepNumber: sum, scene };
    let obj2 = obj;
  } else {
    obj2 = {};
    const merged = Object.assign(scene);
    obj2.stepNumber = sum;
  }
  return obj2;
}
function buildScreenMap(arg0, handleClose) {
  let sum;
  ({ steps, stepScreenPropsMap } = arg0);
  let merged = Object.assign(arg0, Object.assign({ steps: 0, stepScreenPropsMap: 0 }));
  const mapped = steps.map(orderify);
  let num = 0;
  if (0 < steps.length) {
    do {
      sum = num + 1;
      let tmp5 = mapped[sum];
      let scene;
      if (tmp5 != null) {
        scene = tmp5.scene;
      }
      if (scene == null) {
        scene = null;
      }
      let obj2 = {};
      let merged1 = Object.assign(mapped[num]);
      obj2.nextStep = scene;
      obj2.stepsCount = tmp3;
      obj[mapped[num].scene] = obj2;
      num = sum;
    } while (sum < steps.length);
  }
  const obj3 = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
  };
  const obj4 = {};
  let merged2 = Object.assign(obj3);
  let GATING = constants.GATING;
  closure_129_1 = handleClose;
  obj4.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj5 = {};
  } else {
    obj5 = stepScreenPropsMap[tmp12];
    if (obj5 == null) {
      obj5 = {};
    }
  }
  const obj6 = {};
  let merged3 = Object.assign(obj5);
  obj4.render = function render() {
    const GATING = constants.GATING;
    _modDef38(null != obj[GATING], "Props not provided in screen map for scene " + GATING);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const obj2 = {};
    const tmp6 = null != obj[GATING];
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionGroupGatingModalDefault, obj2);
  };
  obj6[constants.GATING] = obj4;
  const obj7 = {};
  let merged4 = Object.assign(obj3);
  let GROUP = constants.GROUP;
  closure_130_1 = handleClose;
  obj7.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj8 = {};
  } else {
    obj8 = stepScreenPropsMap[tmp15];
    if (obj8 == null) {
      obj8 = {};
    }
  }
  const merged5 = Object.assign(obj8);
  obj7.render = function render() {
    const GROUP = constants.GROUP;
    _modDef38(null != obj[GROUP], "Props not provided in screen map for scene " + GROUP);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const obj2 = {};
    const tmp6 = null != obj[GROUP];
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionGroupDetailsModalDefault, obj2);
  };
  obj6[constants.GROUP] = obj7;
  const obj9 = {};
  const merged6 = Object.assign(obj3);
  let CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
  closure_131_1 = handleClose;
  obj9.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj10 = {};
  } else {
    obj10 = stepScreenPropsMap[tmp18];
    if (obj10 == null) {
      obj10 = {};
    }
  }
  const merged7 = Object.assign(obj10);
  obj9.render = function render() {
    const CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
    _modDef38(null != obj[CHANNEL_BENEFITS], "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierChannelBenefitsModal, {});
  };
  obj6[constants.CHANNEL_BENEFITS] = obj9;
  const obj11 = {};
  const merged8 = Object.assign(obj3);
  let INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
  closure_132_1 = handleClose;
  obj11.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj12 = {};
  } else {
    obj12 = stepScreenPropsMap[tmp21];
    if (obj12 == null) {
      obj12 = {};
    }
  }
  const merged9 = Object.assign(obj12);
  obj11.render = function render() {
    const INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
    _modDef38(null != obj[INTANGIBLE_BENEFITS], "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierIntangibleBenefitsModal, {});
  };
  obj6[constants.INTANGIBLE_BENEFITS] = obj11;
  const obj13 = {};
  const merged10 = Object.assign(obj3);
  let CONFIRMATION = constants.CONFIRMATION;
  closure_133_1 = handleClose;
  obj13.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj14 = {};
  } else {
    obj14 = stepScreenPropsMap[tmp24];
    if (obj14 == null) {
      obj14 = {};
    }
  }
  const merged11 = Object.assign(obj14);
  obj13.render = function render() {
    const CONFIRMATION = constants.CONFIRMATION;
    _modDef38(null != obj[CONFIRMATION], "Props not provided in screen map for scene " + CONFIRMATION);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const obj2 = {};
    const tmp6 = null != obj[CONFIRMATION];
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionTierConfirmationModalDefault, obj2);
  };
  obj6[constants.CONFIRMATION] = obj13;
  const obj15 = {};
  const merged12 = Object.assign(obj3);
  let DESIGN = constants.DESIGN;
  closure_134_1 = handleClose;
  obj15.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj16 = {};
  } else {
    obj16 = stepScreenPropsMap[tmp27];
    if (obj16 == null) {
      obj16 = {};
    }
  }
  const merged13 = Object.assign(obj16);
  obj15.render = function render() {
    const DESIGN = constants.DESIGN;
    _modDef38(null != obj[DESIGN], "Props not provided in screen map for scene " + DESIGN);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const obj2 = {};
    const tmp6 = null != obj[DESIGN];
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionTierDesignModalDefault, obj2);
  };
  obj6[constants.DESIGN] = obj15;
  const obj17 = {};
  const merged14 = Object.assign(obj3);
  let DETAILS = constants.DETAILS;
  closure_135_1 = handleClose;
  obj17.headerRight = () => {
    obj = {
      source: _modDef4809,
      onPress() {
        return merged(obj);
      },
      accessibilityLabel: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
  };
  if (null == stepScreenPropsMap) {
    let obj18 = {};
  } else {
    obj18 = stepScreenPropsMap[tmp30];
    if (obj18 == null) {
      obj18 = {};
    }
  }
  const merged15 = Object.assign(obj18);
  obj17.render = function render() {
    const DETAILS = constants.DETAILS;
    _modDef38(null != obj[DETAILS], "Props not provided in screen map for scene " + DETAILS);
    const getRuntimeProps = tmp2.getRuntimeProps;
    let runtimeProps;
    if (getRuntimeProps != null) {
      runtimeProps = getRuntimeProps();
    }
    if (runtimeProps == null) {
      runtimeProps = {};
    }
    obj = {};
    merged = Object.assign(merged);
    const merged1 = Object.assign(tmp2);
    const merged2 = Object.assign(runtimeProps);
    let extraProps = tmp2.extraProps;
    if (extraProps == null) {
      extraProps = [];
    }
    const merged3 = Object.assign(extraProps);
    const obj2 = {};
    const tmp6 = null != obj[DETAILS];
    const merged4 = Object.assign(obj);
    return closure_2_8(GuildRoleSubscriptionTierDetailsModalDefault, obj2);
  };
  obj6[constants.DETAILS] = obj17;
  return obj6;
}
const RoleTierEditStore = fn(17926);
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
let closure_7 = fn(15023).GuildRoleSubscriptionsTierScenes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({
  stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (modalKey) => {
      _require = modalKey;
      const cResult = require("c").c(34);
      closure_11();
      modalKey = modalKey.modalKey;
      ({ steps, onClose } = modalKey);
      let tmp3 = first(closure_5(), 2);
      first = tmp3[0];
      noop = tmp5;
      const tmp6 = closure_6();
      closure_5 = tmp6;
      let obj = require("c");
      closure_6 = first(noop.useState(0), 2)[1];
      const top = modalKey(onClose[18])().top;
      if (cResult[0] !== modalKey) {
        const fn = function c() {
          ModalActionCreatorsDefault.popWithKey(modalKey);
        };
        cResult[0] = modalKey;
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      closure_7 = tmp8;
      if (cResult[2] === tmp8) {
        if (cResult[3] === onClose) {
          if (cResult[4] === tmp6) {
            let tmp9 = cResult[5];
          }
          closure_8 = tmp9;
          if (cResult[6] !== steps) {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(arg0) {
                  scene = modalKey;
                  if (typeof modalKey !== "string") {
                    scene = modalKey.scene;
                  }
                  return scene;
                }
              }
              cResult[8] = M;
            } else {
              class M {
                constructor(arg0) {
                  scene = modalKey;
                  if (typeof modalKey !== "string") {
                    scene = modalKey.scene;
                  }
                  return scene;
                }
              }
            }
            const mapped = steps.map(M);
            cResult[6] = steps;
            cResult[7] = mapped;
          } else {
            class M {
              constructor(arg0) {
                scene = modalKey;
                if (typeof modalKey !== "string") {
                  scene = modalKey.scene;
                }
                return scene;
              }
            }
            if (cResult[9] === tmp10) {
              class M {
                constructor(arg0) {
                  scene = modalKey;
                  if (typeof modalKey !== "string") {
                    scene = modalKey.scene;
                  }
                  return scene;
                }
              }
              if (cResult[12] === first) {
                class M {
                  constructor(arg0) {
                    scene = modalKey;
                    if (typeof modalKey !== "string") {
                      scene = modalKey.scene;
                    }
                    return scene;
                  }
                }
              }
              const fn2 = function x() {
                const obj = { screens: buildScreenMap(closure_0, closure_8), initialStack: null };
                _modDef38(tmp10.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
                if (null == first) {
                  const obj2 = { name: tmp10[0] };
                  const items = [obj2];
                  let tmp3 = items;
                } else {
                  const items1 = [];
                  let num2 = 0;
                  tmp3 = items1;
                  if (0 < tmp10.length) {
                    const obj3 = { name: tmp10[num2] };
                    items1.push(obj3);
                    tmp3 = items1;
                    while (tmp10[num2] !== first) {
                      num2 = num2 + 1;
                      tmp3 = items1;
                      if (num2 < tmp10.length) {
                        continue;
                      } else {
                        break;
                      }
                      break;
                    }
                  }
                }
                obj.initialStack = tmp3;
                return obj;
              };
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
              cResult[12] = first;
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
            cResult[10] = tmp5;
            cResult[11] = L;
          }
        }
      }
      class B {
        constructor(arg0) {
          if (onClose != null) {
            tmp2 = modalKey;
            tmpResult = tmp(modalKey);
          }
          tmp4 = closure_7();
          tmp5 = closure_5();
          return;
        }
      }
      cResult[2] = tmp8;
      cResult[3] = onClose;
      cResult[4] = tmp6;
      cResult[5] = B;
      tmp9 = B;
      const tmp7 = first(noop.useState(0), 2);
    }
  : (modalKey) => {
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
      [noop, closure_5] = onClose(closure_5(), 2);
      closure_6 = closure_6();
      let tmp3 = onClose(noop.useState(0), 2);
      closure_7 = tmp3[1];
      let items = [modalKey];
      closure_8 = noop.useCallback(() => {
        ModalActionCreatorsDefault.popWithKey(modalKey);
      }, items);
      let items1 = [steps];
      const memo = noop.useMemo(
        () =>
          steps.map((scene) => {
            if (typeof scene !== "string") {
              scene = scene.scene;
            }
            return scene;
          }),
        items1,
      );
      const tmp2 = onClose(closure_5(), 2);
      let obj = { children: null };
      ({ screens, initialStack } = modalKey(steps[20])(() => {
        const obj = { screens: buildScreenMap(closure_0, handleClose), initialStack: null };
        _modDef38(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
        if (null == noop) {
          const obj2 = { name: memo[0] };
          const items = [obj2];
          let tmp3 = items;
        } else {
          const items1 = [];
          let num2 = 0;
          tmp3 = items1;
          if (0 < memo.length) {
            const obj3 = { name: memo[num2] };
            items1.push(obj3);
            tmp3 = items1;
            while (memo[num2] !== noop) {
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
        obj.initialStack = tmp3;
        return obj;
      }));
      let obj2 = {
        screens,
        initialRouteStack: initialStack,
        onWillFocus(onDidFocus) {
          const name = onDidFocus.route.name;
          if (null != name) {
            closure_1_5(name);
            const findIndexResult = memo.findIndex((item) => item === name);
            if (findIndexResult >= 0) {
              closure_7(findIndexResult);
            }
          }
        },
        headerBackTitle: null,
      };
      const intl = require("util").intl;
      obj2.headerBackTitle = intl.string(require("util").t["13/7kX"]);
      const items2 = [closure_8(require("Navigator").Navigator, obj2)];
      let obj3 = { style: null, current: tmp3[0] + 1, total: memo.length };
      const items3 = [tmp.stepsIndicator, { top: modalKey(steps[18])().top }];
      obj3.style = items3;
      items2[1] = closure_8(modalKey(steps[22]), obj3);
      obj.children = items2;
      return memo(handleClose, obj);
    };
