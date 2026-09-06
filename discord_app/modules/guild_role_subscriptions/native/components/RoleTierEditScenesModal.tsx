// === Module 17742: RoleTierEditScenesModal ===

// Module 17742 (RoleTierEditScenesModal)
import _modDef38 from "module_38" /* 38 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
function orderify(scene, arg1) {
  const sum = arg1 + 1;
  if (typeof scene === "string") {
    let obj = { stepNumber: sum, scene };
  } else {
    obj = {};
    const merged = Object.assign(scene);
    obj.stepNumber = sum;
  }
  return obj;
}
const RoleTierEditStore = fn(17729);
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
let closure_7 = fn(15205).GuildRoleSubscriptionsTierScenes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default function RoleTierEditScenesModal(modalKey) {
  _require = modalKey;
  function handleClose(arg0) {

  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  let tmp = closure_11();
  [noop, closure_5] = onClose(closure_5(), 2);
  closure_6 = closure_6();
  let tmp3 = onClose(noop.useState(0), 2);
  closure_7 = tmp3[1];
  let items = [modalKey];
  closure_8 = noop.useCallback(() => {
    ModalActionCreatorsDefault.popWithKey(modalKey);
  }, items);
  let items1 = [steps];
  const memo = noop.useMemo(() => steps.map((scene) => {
    if (typeof scene !== "string") {
      scene = scene.scene;
    }
    return scene;
  }), items1);
  const tmp2 = onClose(closure_5(), 2);
  let obj = { children: null };
  ({ screens, initialStack } = modalKey(steps[18])(() => {
    let sum;
    ({ steps, stepScreenPropsMap } = DETAILS);
    let obj = {};
    let merged = Object.assign(DETAILS, Object.assign({ steps: 0, stepScreenPropsMap: 0 }));
    const mapped = steps.map(orderify);
    let num = 0;
    if (0 < steps.length) {
      do {
        sum = num + 1;
        let tmp6 = mapped[sum];
        let scene;
        if (tmp6 != null) {
          scene = tmp6.scene;
        }
        if (scene == null) {
          scene = null;
        }
        obj = {};
        let merged1 = Object.assign(mapped[num]);
        obj.nextStep = scene;
        obj.stepsCount = tmp4;
        obj[mapped[num].scene] = obj;
        num = sum;
      } while (sum < steps.length);
    }
    obj = {
      fullscreen: true,
      headerTitle() {
        return null;
      }
    };
    const obj1 = {};
    let merged2 = Object.assign(obj);
    DETAILS = constants.GATING;
    closure_1 = tmp;
    obj1.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj2 = {};
    } else {
      obj2 = stepScreenPropsMap[tmp13];
      if (obj2 == null) {
        obj2 = {};
      }
    }
    const obj3 = {};
    let merged3 = Object.assign(obj2);
    obj1.render = function render() {
      const GATING = constants.GATING;
      modalKey(steps[6])(null != DETAILS[GATING], "Props not provided in screen map for scene " + GATING);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[GATING];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[10]), obj);
    };
    obj3[constants.GATING] = obj1;
    const obj4 = {};
    let merged4 = Object.assign(obj);
    DETAILS = tmp11.GROUP;
    closure_1 = tmp;
    obj4.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj5 = {};
    } else {
      obj5 = stepScreenPropsMap[tmp16];
      if (obj5 == null) {
        obj5 = {};
      }
    }
    const merged5 = Object.assign(obj5);
    obj4.render = function render() {
      const GROUP = constants.GROUP;
      modalKey(steps[6])(null != DETAILS[GROUP], "Props not provided in screen map for scene " + GROUP);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[GROUP];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[11]), obj);
    };
    obj3[constants.GROUP] = obj4;
    const obj6 = {};
    const merged6 = Object.assign(obj);
    DETAILS = tmp11.CHANNEL_BENEFITS;
    closure_1 = tmp;
    obj6.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj7 = {};
    } else {
      obj7 = stepScreenPropsMap[tmp19];
      if (obj7 == null) {
        obj7 = {};
      }
    }
    const merged7 = Object.assign(obj7);
    obj6.render = function render() {
      const CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
      modalKey(steps[6])(null != DETAILS[CHANNEL_BENEFITS], "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const merged4 = Object.assign(obj);
      return closure_8(DETAILS(steps[12]).GuildRoleSubscriptionTierChannelBenefitsModal, obj);
    };
    obj3[constants.CHANNEL_BENEFITS] = obj6;
    const obj8 = {};
    const merged8 = Object.assign(obj);
    DETAILS = tmp11.INTANGIBLE_BENEFITS;
    closure_1 = tmp;
    obj8.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj9 = {};
    } else {
      obj9 = stepScreenPropsMap[tmp22];
      if (obj9 == null) {
        obj9 = {};
      }
    }
    const merged9 = Object.assign(obj9);
    obj8.render = function render() {
      const INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
      modalKey(steps[6])(null != DETAILS[INTANGIBLE_BENEFITS], "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const merged4 = Object.assign(obj);
      return closure_8(DETAILS(steps[12]).GuildRoleSubscriptionTierIntangibleBenefitsModal, obj);
    };
    obj3[constants.INTANGIBLE_BENEFITS] = obj8;
    const obj10 = {};
    const merged10 = Object.assign(obj);
    DETAILS = tmp11.CONFIRMATION;
    closure_1 = tmp;
    obj10.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj11 = {};
    } else {
      obj11 = stepScreenPropsMap[tmp25];
      if (obj11 == null) {
        obj11 = {};
      }
    }
    const merged11 = Object.assign(obj11);
    obj10.render = function render() {
      const CONFIRMATION = constants.CONFIRMATION;
      modalKey(steps[6])(null != DETAILS[CONFIRMATION], "Props not provided in screen map for scene " + CONFIRMATION);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[CONFIRMATION];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[13]), obj);
    };
    obj3[constants.CONFIRMATION] = obj10;
    const obj12 = {};
    const merged12 = Object.assign(obj);
    DETAILS = tmp11.DESIGN;
    closure_1 = tmp;
    obj12.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj13 = {};
    } else {
      obj13 = stepScreenPropsMap[tmp28];
      if (obj13 == null) {
        obj13 = {};
      }
    }
    const merged13 = Object.assign(obj13);
    obj12.render = function render() {
      const DESIGN = constants.DESIGN;
      modalKey(steps[6])(null != DETAILS[DESIGN], "Props not provided in screen map for scene " + DESIGN);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[DESIGN];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[14]), obj);
    };
    obj3[constants.DESIGN] = obj12;
    const obj14 = {};
    const merged14 = Object.assign(obj);
    DETAILS = tmp11.DETAILS;
    closure_1 = tmp;
    obj14.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj15 = {};
    } else {
      obj15 = stepScreenPropsMap[tmp31];
      if (obj15 == null) {
        obj15 = {};
      }
    }
    const obj16 = { screens: null, initialStack: null };
    const merged15 = Object.assign(obj15);
    obj14.render = function render() {
      DETAILS = constants.DETAILS;
      modalKey(steps[6])(null != DETAILS[DETAILS], "Props not provided in screen map for scene " + DETAILS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[DETAILS];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[15]), obj);
    };
    obj3[constants.DETAILS] = obj14;
    obj16.screens = obj3;
    let arr = memo;
    _modDef38(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
    if (null == noop) {
      const obj17 = { name: arr[0] };
      const items = [obj17];
      let tmp35 = items;
    } else {
      const items1 = [];
      let num2 = 0;
      tmp35 = items1;
      if (0 < arr.length) {
        const obj18 = { name: arr[num2] };
        arr = items1.push(obj18);
        tmp35 = items1;
        while (arr[num2] !== noop) {
          num2 = num2 + 1;
          tmp35 = items1;
          if (num2 < arr.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    obj16.initialStack = tmp35;
    return obj16;
  }));
  obj = {
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
    headerBackTitle: null
  };
  let intl = require("util").intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  const items2 = [closure_8(require("Navigator").Navigator, obj), ];
  obj = { style: null, current: tmp3[0] + 1, total: memo.length };
  const items3 = [tmp.stepsIndicator, { top: modalKey(steps[16])().top }];
  obj.style = items3;
  items2[1] = closure_8(modalKey(steps[20]), obj);
  obj.children = items2;
  return memo(handleClose, obj);
};