// discord_app/modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import util from "../../../../intl/index.native.tsx";
import _modDef5009 from "../../../../../_runtime/metro/05009__.js";
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
      source: _modDef5009,
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
      source: _modDef5009,
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
      source: _modDef5009,
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
      source: _modDef5009,
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
      source: _modDef5009,
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
      source: _modDef5009,
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
      source: _modDef5009,
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
const RoleTierEditStore = fn(18259);
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
const constants = fn(15300).GuildRoleSubscriptionsTierScenes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles({
  stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RoleTierEditScenesModal(modalKey) {
      _require = modalKey;
      const cResult = require("c").c(34);
      const tmp4 = closure_11();
      modalKey = modalKey.modalKey;
      ({ steps, onClose } = modalKey);
      const tmp5 = first(closure_5(), 2);
      first = tmp5[0];
      noop = tmp7;
      const tmp8 = closure_6();
      closure_5 = tmp8;
      const tmp9 = first(noop.useState(0), 2);
      closure_6 = tmp9[1];
      const top = modalKey(onClose[18])().top;
      if (cResult[0] !== modalKey) {
        const fn = function c() {
          ModalActionCreatorsDefault.popWithKey(modalKey);
        };
        cResult[0] = modalKey;
        cResult[1] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[1];
      }
      closure_7 = tmp11;
      if (cResult[2] === tmp11) {
        if (cResult[3] === onClose) {
          if (cResult[4] === tmp8) {
            let tmp12 = cResult[5];
          }
          closure_8 = tmp12;
          if (cResult[6] !== steps) {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function k(scene) {
                if (typeof scene !== "string") {
                  scene = scene.scene;
                }
                return scene;
              };
              cResult[8] = fn2;
              let tmp14 = fn2;
            } else {
              tmp14 = cResult[8];
            }
            const mapped = steps.map(tmp14);
            cResult[6] = steps;
            cResult[7] = mapped;
          } else {
            if (cResult[9] === cResult[7]) {
              if (cResult[10] === tmp7) {
                let tmp17 = cResult[11];
              }
              if (cResult[12] === first) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === modalKey) {
                    if (cResult[15] === arr) {
                      let tmp18 = cResult[16];
                    }
                    ({ screens, initialStack } = tmp10(onClose[20])(tmp18));
                    const _Symbol2 = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(onClose[9]).intl;
                      const stringResult = intl.string(tmp(onClose[9]).t["13/7kX"]);
                      cResult[17] = stringResult;
                      let tmp21 = stringResult;
                    } else {
                      tmp21 = cResult[17];
                    }
                    if (cResult[18] === tmp17) {
                      if (cResult[19] === initialStack) {
                        if (cResult[20] === screens) {
                          let tmp23 = cResult[21];
                        }
                        if (cResult[22] !== top) {
                          let obj2 = { top };
                          cResult[22] = top;
                          cResult[23] = obj2;
                          let tmp26 = obj2;
                        } else {
                          tmp26 = cResult[23];
                        }
                        if (cResult[24] === tmp4.stepsIndicator) {
                          if (cResult[25] === tmp26) {
                            let tmp27 = cResult[26];
                          }
                          const sum = tmp9[0] + 1;
                          if (cResult[27] === arr.length) {
                            if (cResult[28] === tmp27) {
                              if (cResult[29] === sum) {
                                let tmp29 = cResult[30];
                              }
                              if (cResult[31] === tmp29) {
                                if (cResult[32] === tmp23) {
                                  let tmp32 = cResult[33];
                                }
                                return tmp32;
                              }
                              let obj3 = { children: null };
                              let items = [tmp23, tmp29];
                              obj3.children = items;
                              const tmp35 = closure_10(arr, obj3);
                              cResult[31] = tmp29;
                              cResult[32] = tmp23;
                              cResult[33] = tmp35;
                              tmp32 = tmp35;
                            }
                          }
                          const obj4 = { style: tmp27, current: sum, total: arr.length };
                          const tmp31 = closure_8(tmp10(onClose[22]), obj4);
                          cResult[27] = arr.length;
                          cResult[28] = tmp27;
                          cResult[29] = sum;
                          cResult[30] = tmp31;
                          tmp29 = tmp31;
                        }
                        let items1 = [tmp4.stepsIndicator, tmp26];
                        cResult[24] = tmp4.stepsIndicator;
                        cResult[25] = tmp26;
                        cResult[26] = items1;
                        tmp27 = items1;
                      }
                    }
                    const obj5 = {
                      screens,
                      initialRouteStack: initialStack,
                      onWillFocus: tmp17,
                      headerBackTitle: tmp21,
                    };
                    const tmp25 = closure_8(tmp(onClose[21]).Navigator, obj5);
                    cResult[18] = tmp17;
                    cResult[19] = initialStack;
                    cResult[20] = screens;
                    cResult[21] = tmp25;
                    tmp23 = tmp25;
                    const tmp19 = tmp10(onClose[20])(tmp18);
                  }
                }
              }
              const fn3 = function x() {
                const obj = { screens: buildScreenMap(closure_0, closure_8), initialStack: null };
                _modDef38(arr.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
                if (null == first) {
                  const obj2 = { name: arr[0] };
                  const items = [obj2];
                  let tmp3 = items;
                } else {
                  const items1 = [];
                  let num2 = 0;
                  tmp3 = items1;
                  if (0 < arr.length) {
                    const obj3 = { name: arr[num2] };
                    items1.push(obj3);
                    tmp3 = items1;
                    while (arr[num2] !== first) {
                      num2 = num2 + 1;
                      tmp3 = items1;
                      if (num2 < arr.length) {
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
              cResult[12] = first;
              cResult[13] = tmp12;
              cResult[14] = modalKey;
              cResult[15] = arr;
              cResult[16] = fn3;
              tmp18 = fn3;
            }
            function handleSceneWillFocus(route) {
              const name = route.route.name;
              if (null != name) {
                closure_4(name);
                const findIndexResult = arr.findIndex((item) => item === name);
                if (findIndexResult >= 0) {
                  closure_6(findIndexResult);
                }
              }
            }
            cResult[9] = cResult[7];
            cResult[10] = tmp7;
            cResult[11] = handleSceneWillFocus;
            tmp17 = handleSceneWillFocus;
          }
        }
      }
      function handleClose(arg0) {
        if (onClose != null) {
          tmp(arg0);
        }
        closure_7();
        closure_5();
      }
      cResult[2] = tmp11;
      cResult[3] = onClose;
      cResult[4] = tmp8;
      cResult[5] = handleClose;
      tmp12 = handleClose;
      let obj = require("c");
    }
  : function RoleTierEditScenesModal(modalKey) {
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
        onWillFocus: function handleSceneWillFocus(route) {
          const name = route.route.name;
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
