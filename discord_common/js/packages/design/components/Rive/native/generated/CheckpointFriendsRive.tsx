// === Module 4908: CheckpointFriendsRive ===

// Module 4908 (CheckpointFriendsRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 4844 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4897 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { MAIN: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Sidekick: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Avatar: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, Username: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, "Friends 01 Rotation": { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" } };
const artboardViewModelInstances = { MAIN: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Sidekick: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Avatar: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], Username: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], "Friends 01 Rotation": ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"] };
let ReactCompilerGating = fn(558);
let obj2 = {
  MAIN: ReactCompilerGating.isReactCompilerEnabled() ? (function MAINBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = BaseRive.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const tmpResult = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = BaseRive.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const tmpResult37 = BaseRive;
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = BaseRive.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const tmpResult38 = BaseRive;
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = BaseRive.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const tmpResult39 = BaseRive;
    let prop6;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = BaseRive.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const tmpResult40 = BaseRive;
    let prop8;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = BaseRive.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const tmpResult41 = BaseRive;
    let prop10;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = BaseRive.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const tmpResult42 = BaseRive;
    let prop12;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = BaseRive.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const tmpResult43 = BaseRive;
    let prop14;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = BaseRive.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const tmpResult44 = BaseRive;
    let prop16;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = BaseRive.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const tmpResult45 = BaseRive;
    let prop18;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = BaseRive.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const tmpResult46 = BaseRive;
    let prop20;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = BaseRive.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const tmpResult47 = BaseRive;
    let prop22;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = BaseRive.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const tmpResult48 = BaseRive;
    let prop24;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = BaseRive.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const tmpResult49 = BaseRive;
    let prop26;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = BaseRive.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const tmpResult50 = BaseRive;
    let prop28;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = BaseRive.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const tmpResult51 = BaseRive;
    let prop30;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = BaseRive.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const tmpResult52 = BaseRive;
    let prop32;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = BaseRive.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const tmpResult53 = BaseRive;
    let prop34;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = BaseRive.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const tmpResult54 = BaseRive;
    let prop36;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = BaseRive.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const tmpResult55 = BaseRive;
    let prop38;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = BaseRive.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const tmpResult56 = BaseRive;
    let prop40;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = BaseRive.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const tmpResult57 = BaseRive;
    let prop42;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = BaseRive.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const tmpResult58 = BaseRive;
    let prop44;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = BaseRive.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const tmpResult59 = BaseRive;
    let prop46;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = BaseRive.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const tmpResult60 = BaseRive;
    let prop48;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = BaseRive.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const tmpResult61 = BaseRive;
    let prop50;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = BaseRive.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const tmpResult62 = BaseRive;
    let prop52;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = BaseRive.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const tmpResult63 = BaseRive;
    let prop54;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = BaseRive.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const tmpResult64 = BaseRive;
    let prop56;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = BaseRive.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const tmpResult65 = BaseRive;
    let prop58;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = BaseRive.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const tmpResult66 = BaseRive;
    let prop60;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding15 = BaseRive.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const tmpResult67 = BaseRive;
    let prop62;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding8 = BaseRive.useColorBinding("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    const tmpResult68 = BaseRive;
    let prop64;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding9 = BaseRive.useColorBinding("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    const tmpResult69 = BaseRive;
    let prop66;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding4 = BaseRive.useStringBinding("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    const tmpResult70 = BaseRive;
    let prop68;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding4 = BaseRive.useImageBinding("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    const tmpResult71 = BaseRive;
    let ConnectorColor;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding10 = BaseRive.useColorBinding("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }) : (function MAINBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = BaseRive.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const tmpResult = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = BaseRive.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const tmpResult37 = BaseRive;
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = BaseRive.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const tmpResult38 = BaseRive;
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = BaseRive.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const tmpResult39 = BaseRive;
    let prop6;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = BaseRive.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const tmpResult40 = BaseRive;
    let prop8;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = BaseRive.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const tmpResult41 = BaseRive;
    let prop10;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = BaseRive.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const tmpResult42 = BaseRive;
    let prop12;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = BaseRive.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const tmpResult43 = BaseRive;
    let prop14;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = BaseRive.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const tmpResult44 = BaseRive;
    let prop16;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = BaseRive.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const tmpResult45 = BaseRive;
    let prop18;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = BaseRive.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const tmpResult46 = BaseRive;
    let prop20;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = BaseRive.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const tmpResult47 = BaseRive;
    let prop22;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = BaseRive.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const tmpResult48 = BaseRive;
    let prop24;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = BaseRive.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const tmpResult49 = BaseRive;
    let prop26;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = BaseRive.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const tmpResult50 = BaseRive;
    let prop28;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = BaseRive.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const tmpResult51 = BaseRive;
    let prop30;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = BaseRive.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const tmpResult52 = BaseRive;
    let prop32;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = BaseRive.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const tmpResult53 = BaseRive;
    let prop34;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = BaseRive.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const tmpResult54 = BaseRive;
    let prop36;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = BaseRive.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const tmpResult55 = BaseRive;
    let prop38;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = BaseRive.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const tmpResult56 = BaseRive;
    let prop40;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = BaseRive.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const tmpResult57 = BaseRive;
    let prop42;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = BaseRive.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const tmpResult58 = BaseRive;
    let prop44;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = BaseRive.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const tmpResult59 = BaseRive;
    let prop46;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = BaseRive.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const tmpResult60 = BaseRive;
    let prop48;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = BaseRive.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const tmpResult61 = BaseRive;
    let prop50;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = BaseRive.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const tmpResult62 = BaseRive;
    let prop52;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = BaseRive.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const tmpResult63 = BaseRive;
    let prop54;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = BaseRive.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const tmpResult64 = BaseRive;
    let prop56;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = BaseRive.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const tmpResult65 = BaseRive;
    let prop58;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = BaseRive.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const tmpResult66 = BaseRive;
    let prop60;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding15 = BaseRive.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const tmpResult67 = BaseRive;
    let prop62;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding8 = BaseRive.useColorBinding("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    const tmpResult68 = BaseRive;
    let prop64;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding9 = BaseRive.useColorBinding("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    const tmpResult69 = BaseRive;
    let prop66;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding4 = BaseRive.useStringBinding("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    const tmpResult70 = BaseRive;
    let prop68;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding4 = BaseRive.useImageBinding("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    const tmpResult71 = BaseRive;
    let ConnectorColor;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding10 = BaseRive.useColorBinding("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }),
  Sidekick: null,
  Avatar: null,
  Username: null,
  "Friends 01 Rotation": null
};
ReactCompilerGating = fn(558);
obj2.Sidekick = ReactCompilerGating.isReactCompilerEnabled() ? (function SidekickBindings(reducedMotionEnabled) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let twoFriends;
  if (dataBinding != null) {
    twoFriends = dataBinding.twoFriends;
  }
  let twoFriends1;
  if (onDataBindingChange != null) {
    twoFriends1 = onDataBindingChange.twoFriends;
  }
  const booleanBinding1 = BaseRive.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["Avatar01/ShadowVisibility"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
  }
  const numberBinding1 = BaseRive.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding["Avatar01/StrokeVisibility"];
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
  }
  const numberBinding2 = BaseRive.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
  const tmpResult38 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding["Avatar01/UsernameVisibility"];
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
  }
  const numberBinding3 = BaseRive.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
  const tmpResult39 = BaseRive;
  let prop6;
  if (dataBinding != null) {
    prop6 = dataBinding["Avatar01/Stroke"];
  }
  let prop7;
  if (onDataBindingChange != null) {
    prop7 = onDataBindingChange["Avatar01/Stroke"];
  }
  const colorBinding = BaseRive.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
  const tmpResult40 = BaseRive;
  let prop8;
  if (dataBinding != null) {
    prop8 = dataBinding["Avatar01/Fill"];
  }
  let prop9;
  if (onDataBindingChange != null) {
    prop9 = onDataBindingChange["Avatar01/Fill"];
  }
  const colorBinding1 = BaseRive.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
  const tmpResult41 = BaseRive;
  let prop10;
  if (dataBinding != null) {
    prop10 = dataBinding["Avatar01/Username"];
  }
  let prop11;
  if (onDataBindingChange != null) {
    prop11 = onDataBindingChange["Avatar01/Username"];
  }
  const stringBinding = BaseRive.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
  const tmpResult42 = BaseRive;
  let prop12;
  if (dataBinding != null) {
    prop12 = dataBinding["Avatar01/img"];
  }
  let prop13;
  if (onDataBindingChange != null) {
    prop13 = onDataBindingChange["Avatar01/img"];
  }
  const imageBinding = BaseRive.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
  const tmpResult43 = BaseRive;
  let prop14;
  if (dataBinding != null) {
    prop14 = dataBinding["Avatar02/ShadowVisibility"];
  }
  let prop15;
  if (onDataBindingChange != null) {
    prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
  }
  const numberBinding4 = BaseRive.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
  const tmpResult44 = BaseRive;
  let prop16;
  if (dataBinding != null) {
    prop16 = dataBinding["Avatar02/StrokeVisibility"];
  }
  let prop17;
  if (onDataBindingChange != null) {
    prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
  }
  const numberBinding5 = BaseRive.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
  const tmpResult45 = BaseRive;
  let prop18;
  if (dataBinding != null) {
    prop18 = dataBinding["Avatar02/UsernameVisibility"];
  }
  let prop19;
  if (onDataBindingChange != null) {
    prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
  }
  const numberBinding6 = BaseRive.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
  const tmpResult46 = BaseRive;
  let prop20;
  if (dataBinding != null) {
    prop20 = dataBinding["Avatar02/Stroke"];
  }
  let prop21;
  if (onDataBindingChange != null) {
    prop21 = onDataBindingChange["Avatar02/Stroke"];
  }
  const colorBinding2 = BaseRive.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
  const tmpResult47 = BaseRive;
  let prop22;
  if (dataBinding != null) {
    prop22 = dataBinding["Avatar02/Fill"];
  }
  let prop23;
  if (onDataBindingChange != null) {
    prop23 = onDataBindingChange["Avatar02/Fill"];
  }
  const colorBinding3 = BaseRive.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
  const tmpResult48 = BaseRive;
  let prop24;
  if (dataBinding != null) {
    prop24 = dataBinding["Avatar02/Username"];
  }
  let prop25;
  if (onDataBindingChange != null) {
    prop25 = onDataBindingChange["Avatar02/Username"];
  }
  const stringBinding1 = BaseRive.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
  const tmpResult49 = BaseRive;
  let prop26;
  if (dataBinding != null) {
    prop26 = dataBinding["Avatar02/img"];
  }
  let prop27;
  if (onDataBindingChange != null) {
    prop27 = onDataBindingChange["Avatar02/img"];
  }
  const imageBinding1 = BaseRive.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
  const tmpResult50 = BaseRive;
  let prop28;
  if (dataBinding != null) {
    prop28 = dataBinding["Avatar03/ShadowVisibility"];
  }
  let prop29;
  if (onDataBindingChange != null) {
    prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
  }
  const numberBinding7 = BaseRive.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
  const tmpResult51 = BaseRive;
  let prop30;
  if (dataBinding != null) {
    prop30 = dataBinding["Avatar03/StrokeVisibility"];
  }
  let prop31;
  if (onDataBindingChange != null) {
    prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
  }
  const numberBinding8 = BaseRive.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
  const tmpResult52 = BaseRive;
  let prop32;
  if (dataBinding != null) {
    prop32 = dataBinding["Avatar03/UsernameVisibility"];
  }
  let prop33;
  if (onDataBindingChange != null) {
    prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
  }
  const numberBinding9 = BaseRive.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
  const tmpResult53 = BaseRive;
  let prop34;
  if (dataBinding != null) {
    prop34 = dataBinding["Avatar03/Stroke"];
  }
  let prop35;
  if (onDataBindingChange != null) {
    prop35 = onDataBindingChange["Avatar03/Stroke"];
  }
  const colorBinding4 = BaseRive.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
  const tmpResult54 = BaseRive;
  let prop36;
  if (dataBinding != null) {
    prop36 = dataBinding["Avatar03/Fill"];
  }
  let prop37;
  if (onDataBindingChange != null) {
    prop37 = onDataBindingChange["Avatar03/Fill"];
  }
  const colorBinding5 = BaseRive.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
  const tmpResult55 = BaseRive;
  let prop38;
  if (dataBinding != null) {
    prop38 = dataBinding["Avatar03/Username"];
  }
  let prop39;
  if (onDataBindingChange != null) {
    prop39 = onDataBindingChange["Avatar03/Username"];
  }
  const stringBinding2 = BaseRive.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
  const tmpResult56 = BaseRive;
  let prop40;
  if (dataBinding != null) {
    prop40 = dataBinding["Avatar03/img"];
  }
  let prop41;
  if (onDataBindingChange != null) {
    prop41 = onDataBindingChange["Avatar03/img"];
  }
  const imageBinding2 = BaseRive.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
  const tmpResult57 = BaseRive;
  let prop42;
  if (dataBinding != null) {
    prop42 = dataBinding["Avatar04/ShadowVisibility"];
  }
  let prop43;
  if (onDataBindingChange != null) {
    prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
  }
  const numberBinding10 = BaseRive.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
  const tmpResult58 = BaseRive;
  let prop44;
  if (dataBinding != null) {
    prop44 = dataBinding["Avatar04/StrokeVisibility"];
  }
  let prop45;
  if (onDataBindingChange != null) {
    prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
  }
  const numberBinding11 = BaseRive.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
  const tmpResult59 = BaseRive;
  let prop46;
  if (dataBinding != null) {
    prop46 = dataBinding["Avatar04/UsernameVisibility"];
  }
  let prop47;
  if (onDataBindingChange != null) {
    prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
  }
  const numberBinding12 = BaseRive.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
  const tmpResult60 = BaseRive;
  let prop48;
  if (dataBinding != null) {
    prop48 = dataBinding["Avatar04/Stroke"];
  }
  let prop49;
  if (onDataBindingChange != null) {
    prop49 = onDataBindingChange["Avatar04/Stroke"];
  }
  const colorBinding6 = BaseRive.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
  const tmpResult61 = BaseRive;
  let prop50;
  if (dataBinding != null) {
    prop50 = dataBinding["Avatar04/Fill"];
  }
  let prop51;
  if (onDataBindingChange != null) {
    prop51 = onDataBindingChange["Avatar04/Fill"];
  }
  const colorBinding7 = BaseRive.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
  const tmpResult62 = BaseRive;
  let prop52;
  if (dataBinding != null) {
    prop52 = dataBinding["Avatar04/Username"];
  }
  let prop53;
  if (onDataBindingChange != null) {
    prop53 = onDataBindingChange["Avatar04/Username"];
  }
  const stringBinding3 = BaseRive.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop54;
  if (dataBinding != null) {
    prop54 = dataBinding["Avatar04/img"];
  }
  let prop55;
  if (onDataBindingChange != null) {
    prop55 = onDataBindingChange["Avatar04/img"];
  }
  const imageBinding3 = BaseRive.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop56;
  if (dataBinding != null) {
    prop56 = dataBinding["Avatar05/ShadowVisibility"];
  }
  let prop57;
  if (onDataBindingChange != null) {
    prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
  }
  const numberBinding13 = BaseRive.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
  const tmpResult65 = BaseRive;
  let prop58;
  if (dataBinding != null) {
    prop58 = dataBinding["Avatar05/StrokeVisibility"];
  }
  let prop59;
  if (onDataBindingChange != null) {
    prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
  }
  const numberBinding14 = BaseRive.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
  const tmpResult66 = BaseRive;
  let prop60;
  if (dataBinding != null) {
    prop60 = dataBinding["Avatar05/UsernameVisibility"];
  }
  let prop61;
  if (onDataBindingChange != null) {
    prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
  }
  const numberBinding15 = BaseRive.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
  const tmpResult67 = BaseRive;
  let prop62;
  if (dataBinding != null) {
    prop62 = dataBinding["Avatar05/Stroke"];
  }
  let prop63;
  if (onDataBindingChange != null) {
    prop63 = onDataBindingChange["Avatar05/Stroke"];
  }
  const colorBinding8 = BaseRive.useColorBinding("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop64;
  if (dataBinding != null) {
    prop64 = dataBinding["Avatar05/Fill"];
  }
  let prop65;
  if (onDataBindingChange != null) {
    prop65 = onDataBindingChange["Avatar05/Fill"];
  }
  const colorBinding9 = BaseRive.useColorBinding("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
  const tmpResult69 = BaseRive;
  let prop66;
  if (dataBinding != null) {
    prop66 = dataBinding["Avatar05/Username"];
  }
  let prop67;
  if (onDataBindingChange != null) {
    prop67 = onDataBindingChange["Avatar05/Username"];
  }
  const stringBinding4 = BaseRive.useStringBinding("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
  const tmpResult70 = BaseRive;
  let prop68;
  if (dataBinding != null) {
    prop68 = dataBinding["Avatar05/img"];
  }
  let prop69;
  if (onDataBindingChange != null) {
    prop69 = onDataBindingChange["Avatar05/img"];
  }
  const imageBinding4 = BaseRive.useImageBinding("Avatar05/img", instance, prop68, prop69, playIfNeeded);
  const tmpResult71 = BaseRive;
  let ConnectorColor;
  if (dataBinding != null) {
    ConnectorColor = dataBinding.ConnectorColor;
  }
  let ConnectorColor1;
  if (onDataBindingChange != null) {
    ConnectorColor1 = onDataBindingChange.ConnectorColor;
  }
  const colorBinding10 = BaseRive.useColorBinding("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
  return null;
}) : (function SidekickBindings(reducedMotionEnabled) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let twoFriends;
  if (dataBinding != null) {
    twoFriends = dataBinding.twoFriends;
  }
  let twoFriends1;
  if (onDataBindingChange != null) {
    twoFriends1 = onDataBindingChange.twoFriends;
  }
  const booleanBinding1 = BaseRive.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["Avatar01/ShadowVisibility"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
  }
  const numberBinding1 = BaseRive.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding["Avatar01/StrokeVisibility"];
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
  }
  const numberBinding2 = BaseRive.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
  const tmpResult38 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding["Avatar01/UsernameVisibility"];
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
  }
  const numberBinding3 = BaseRive.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
  const tmpResult39 = BaseRive;
  let prop6;
  if (dataBinding != null) {
    prop6 = dataBinding["Avatar01/Stroke"];
  }
  let prop7;
  if (onDataBindingChange != null) {
    prop7 = onDataBindingChange["Avatar01/Stroke"];
  }
  const colorBinding = BaseRive.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
  const tmpResult40 = BaseRive;
  let prop8;
  if (dataBinding != null) {
    prop8 = dataBinding["Avatar01/Fill"];
  }
  let prop9;
  if (onDataBindingChange != null) {
    prop9 = onDataBindingChange["Avatar01/Fill"];
  }
  const colorBinding1 = BaseRive.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
  const tmpResult41 = BaseRive;
  let prop10;
  if (dataBinding != null) {
    prop10 = dataBinding["Avatar01/Username"];
  }
  let prop11;
  if (onDataBindingChange != null) {
    prop11 = onDataBindingChange["Avatar01/Username"];
  }
  const stringBinding = BaseRive.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
  const tmpResult42 = BaseRive;
  let prop12;
  if (dataBinding != null) {
    prop12 = dataBinding["Avatar01/img"];
  }
  let prop13;
  if (onDataBindingChange != null) {
    prop13 = onDataBindingChange["Avatar01/img"];
  }
  const imageBinding = BaseRive.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
  const tmpResult43 = BaseRive;
  let prop14;
  if (dataBinding != null) {
    prop14 = dataBinding["Avatar02/ShadowVisibility"];
  }
  let prop15;
  if (onDataBindingChange != null) {
    prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
  }
  const numberBinding4 = BaseRive.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
  const tmpResult44 = BaseRive;
  let prop16;
  if (dataBinding != null) {
    prop16 = dataBinding["Avatar02/StrokeVisibility"];
  }
  let prop17;
  if (onDataBindingChange != null) {
    prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
  }
  const numberBinding5 = BaseRive.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
  const tmpResult45 = BaseRive;
  let prop18;
  if (dataBinding != null) {
    prop18 = dataBinding["Avatar02/UsernameVisibility"];
  }
  let prop19;
  if (onDataBindingChange != null) {
    prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
  }
  const numberBinding6 = BaseRive.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
  const tmpResult46 = BaseRive;
  let prop20;
  if (dataBinding != null) {
    prop20 = dataBinding["Avatar02/Stroke"];
  }
  let prop21;
  if (onDataBindingChange != null) {
    prop21 = onDataBindingChange["Avatar02/Stroke"];
  }
  const colorBinding2 = BaseRive.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
  const tmpResult47 = BaseRive;
  let prop22;
  if (dataBinding != null) {
    prop22 = dataBinding["Avatar02/Fill"];
  }
  let prop23;
  if (onDataBindingChange != null) {
    prop23 = onDataBindingChange["Avatar02/Fill"];
  }
  const colorBinding3 = BaseRive.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
  const tmpResult48 = BaseRive;
  let prop24;
  if (dataBinding != null) {
    prop24 = dataBinding["Avatar02/Username"];
  }
  let prop25;
  if (onDataBindingChange != null) {
    prop25 = onDataBindingChange["Avatar02/Username"];
  }
  const stringBinding1 = BaseRive.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
  const tmpResult49 = BaseRive;
  let prop26;
  if (dataBinding != null) {
    prop26 = dataBinding["Avatar02/img"];
  }
  let prop27;
  if (onDataBindingChange != null) {
    prop27 = onDataBindingChange["Avatar02/img"];
  }
  const imageBinding1 = BaseRive.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
  const tmpResult50 = BaseRive;
  let prop28;
  if (dataBinding != null) {
    prop28 = dataBinding["Avatar03/ShadowVisibility"];
  }
  let prop29;
  if (onDataBindingChange != null) {
    prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
  }
  const numberBinding7 = BaseRive.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
  const tmpResult51 = BaseRive;
  let prop30;
  if (dataBinding != null) {
    prop30 = dataBinding["Avatar03/StrokeVisibility"];
  }
  let prop31;
  if (onDataBindingChange != null) {
    prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
  }
  const numberBinding8 = BaseRive.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
  const tmpResult52 = BaseRive;
  let prop32;
  if (dataBinding != null) {
    prop32 = dataBinding["Avatar03/UsernameVisibility"];
  }
  let prop33;
  if (onDataBindingChange != null) {
    prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
  }
  const numberBinding9 = BaseRive.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
  const tmpResult53 = BaseRive;
  let prop34;
  if (dataBinding != null) {
    prop34 = dataBinding["Avatar03/Stroke"];
  }
  let prop35;
  if (onDataBindingChange != null) {
    prop35 = onDataBindingChange["Avatar03/Stroke"];
  }
  const colorBinding4 = BaseRive.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
  const tmpResult54 = BaseRive;
  let prop36;
  if (dataBinding != null) {
    prop36 = dataBinding["Avatar03/Fill"];
  }
  let prop37;
  if (onDataBindingChange != null) {
    prop37 = onDataBindingChange["Avatar03/Fill"];
  }
  const colorBinding5 = BaseRive.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
  const tmpResult55 = BaseRive;
  let prop38;
  if (dataBinding != null) {
    prop38 = dataBinding["Avatar03/Username"];
  }
  let prop39;
  if (onDataBindingChange != null) {
    prop39 = onDataBindingChange["Avatar03/Username"];
  }
  const stringBinding2 = BaseRive.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
  const tmpResult56 = BaseRive;
  let prop40;
  if (dataBinding != null) {
    prop40 = dataBinding["Avatar03/img"];
  }
  let prop41;
  if (onDataBindingChange != null) {
    prop41 = onDataBindingChange["Avatar03/img"];
  }
  const imageBinding2 = BaseRive.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
  const tmpResult57 = BaseRive;
  let prop42;
  if (dataBinding != null) {
    prop42 = dataBinding["Avatar04/ShadowVisibility"];
  }
  let prop43;
  if (onDataBindingChange != null) {
    prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
  }
  const numberBinding10 = BaseRive.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
  const tmpResult58 = BaseRive;
  let prop44;
  if (dataBinding != null) {
    prop44 = dataBinding["Avatar04/StrokeVisibility"];
  }
  let prop45;
  if (onDataBindingChange != null) {
    prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
  }
  const numberBinding11 = BaseRive.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
  const tmpResult59 = BaseRive;
  let prop46;
  if (dataBinding != null) {
    prop46 = dataBinding["Avatar04/UsernameVisibility"];
  }
  let prop47;
  if (onDataBindingChange != null) {
    prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
  }
  const numberBinding12 = BaseRive.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
  const tmpResult60 = BaseRive;
  let prop48;
  if (dataBinding != null) {
    prop48 = dataBinding["Avatar04/Stroke"];
  }
  let prop49;
  if (onDataBindingChange != null) {
    prop49 = onDataBindingChange["Avatar04/Stroke"];
  }
  const colorBinding6 = BaseRive.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
  const tmpResult61 = BaseRive;
  let prop50;
  if (dataBinding != null) {
    prop50 = dataBinding["Avatar04/Fill"];
  }
  let prop51;
  if (onDataBindingChange != null) {
    prop51 = onDataBindingChange["Avatar04/Fill"];
  }
  const colorBinding7 = BaseRive.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
  const tmpResult62 = BaseRive;
  let prop52;
  if (dataBinding != null) {
    prop52 = dataBinding["Avatar04/Username"];
  }
  let prop53;
  if (onDataBindingChange != null) {
    prop53 = onDataBindingChange["Avatar04/Username"];
  }
  const stringBinding3 = BaseRive.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop54;
  if (dataBinding != null) {
    prop54 = dataBinding["Avatar04/img"];
  }
  let prop55;
  if (onDataBindingChange != null) {
    prop55 = onDataBindingChange["Avatar04/img"];
  }
  const imageBinding3 = BaseRive.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop56;
  if (dataBinding != null) {
    prop56 = dataBinding["Avatar05/ShadowVisibility"];
  }
  let prop57;
  if (onDataBindingChange != null) {
    prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
  }
  const numberBinding13 = BaseRive.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
  const tmpResult65 = BaseRive;
  let prop58;
  if (dataBinding != null) {
    prop58 = dataBinding["Avatar05/StrokeVisibility"];
  }
  let prop59;
  if (onDataBindingChange != null) {
    prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
  }
  const numberBinding14 = BaseRive.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
  const tmpResult66 = BaseRive;
  let prop60;
  if (dataBinding != null) {
    prop60 = dataBinding["Avatar05/UsernameVisibility"];
  }
  let prop61;
  if (onDataBindingChange != null) {
    prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
  }
  const numberBinding15 = BaseRive.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
  const tmpResult67 = BaseRive;
  let prop62;
  if (dataBinding != null) {
    prop62 = dataBinding["Avatar05/Stroke"];
  }
  let prop63;
  if (onDataBindingChange != null) {
    prop63 = onDataBindingChange["Avatar05/Stroke"];
  }
  const colorBinding8 = BaseRive.useColorBinding("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop64;
  if (dataBinding != null) {
    prop64 = dataBinding["Avatar05/Fill"];
  }
  let prop65;
  if (onDataBindingChange != null) {
    prop65 = onDataBindingChange["Avatar05/Fill"];
  }
  const colorBinding9 = BaseRive.useColorBinding("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
  const tmpResult69 = BaseRive;
  let prop66;
  if (dataBinding != null) {
    prop66 = dataBinding["Avatar05/Username"];
  }
  let prop67;
  if (onDataBindingChange != null) {
    prop67 = onDataBindingChange["Avatar05/Username"];
  }
  const stringBinding4 = BaseRive.useStringBinding("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
  const tmpResult70 = BaseRive;
  let prop68;
  if (dataBinding != null) {
    prop68 = dataBinding["Avatar05/img"];
  }
  let prop69;
  if (onDataBindingChange != null) {
    prop69 = onDataBindingChange["Avatar05/img"];
  }
  const imageBinding4 = BaseRive.useImageBinding("Avatar05/img", instance, prop68, prop69, playIfNeeded);
  const tmpResult71 = BaseRive;
  let ConnectorColor;
  if (dataBinding != null) {
    ConnectorColor = dataBinding.ConnectorColor;
  }
  let ConnectorColor1;
  if (onDataBindingChange != null) {
    ConnectorColor1 = onDataBindingChange.ConnectorColor;
  }
  const colorBinding10 = BaseRive.useColorBinding("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.Avatar = ReactCompilerGating.isReactCompilerEnabled() ? (function AvatarBindings(arg0) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let ShadowVisibility;
  if (dataBinding != null) {
    ShadowVisibility = dataBinding.ShadowVisibility;
  }
  let ShadowVisibility1;
  if (onDataBindingChange != null) {
    ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
  }
  const numberBinding = BaseRive.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
  let StrokeVisibility;
  if (dataBinding != null) {
    StrokeVisibility = dataBinding.StrokeVisibility;
  }
  let StrokeVisibility1;
  if (onDataBindingChange != null) {
    StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
  }
  const numberBinding1 = BaseRive.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
  const tmpResult = BaseRive;
  let UsernameVisibility;
  if (dataBinding != null) {
    UsernameVisibility = dataBinding.UsernameVisibility;
  }
  let UsernameVisibility1;
  if (onDataBindingChange != null) {
    UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
  }
  const numberBinding2 = BaseRive.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
  const tmpResult6 = BaseRive;
  let Stroke;
  if (dataBinding != null) {
    Stroke = dataBinding.Stroke;
  }
  let Stroke1;
  if (onDataBindingChange != null) {
    Stroke1 = onDataBindingChange.Stroke;
  }
  const colorBinding = BaseRive.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
  const tmpResult7 = BaseRive;
  let Fill;
  if (dataBinding != null) {
    Fill = dataBinding.Fill;
  }
  let Fill1;
  if (onDataBindingChange != null) {
    Fill1 = onDataBindingChange.Fill;
  }
  const colorBinding1 = BaseRive.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let Username;
  if (dataBinding != null) {
    Username = dataBinding.Username;
  }
  let Username1;
  if (onDataBindingChange != null) {
    Username1 = onDataBindingChange.Username;
  }
  const stringBinding = BaseRive.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let img;
  if (dataBinding != null) {
    img = dataBinding.img;
  }
  let img1;
  if (onDataBindingChange != null) {
    img1 = onDataBindingChange.img;
  }
  const imageBinding = BaseRive.useImageBinding("img", instance, img, img1, playIfNeeded);
  return null;
}) : (function AvatarBindings(arg0) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let ShadowVisibility;
  if (dataBinding != null) {
    ShadowVisibility = dataBinding.ShadowVisibility;
  }
  let ShadowVisibility1;
  if (onDataBindingChange != null) {
    ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
  }
  const numberBinding = BaseRive.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
  let StrokeVisibility;
  if (dataBinding != null) {
    StrokeVisibility = dataBinding.StrokeVisibility;
  }
  let StrokeVisibility1;
  if (onDataBindingChange != null) {
    StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
  }
  const numberBinding1 = BaseRive.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
  const tmpResult = BaseRive;
  let UsernameVisibility;
  if (dataBinding != null) {
    UsernameVisibility = dataBinding.UsernameVisibility;
  }
  let UsernameVisibility1;
  if (onDataBindingChange != null) {
    UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
  }
  const numberBinding2 = BaseRive.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
  const tmpResult6 = BaseRive;
  let Stroke;
  if (dataBinding != null) {
    Stroke = dataBinding.Stroke;
  }
  let Stroke1;
  if (onDataBindingChange != null) {
    Stroke1 = onDataBindingChange.Stroke;
  }
  const colorBinding = BaseRive.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
  const tmpResult7 = BaseRive;
  let Fill;
  if (dataBinding != null) {
    Fill = dataBinding.Fill;
  }
  let Fill1;
  if (onDataBindingChange != null) {
    Fill1 = onDataBindingChange.Fill;
  }
  const colorBinding1 = BaseRive.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let Username;
  if (dataBinding != null) {
    Username = dataBinding.Username;
  }
  let Username1;
  if (onDataBindingChange != null) {
    Username1 = onDataBindingChange.Username;
  }
  const stringBinding = BaseRive.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let img;
  if (dataBinding != null) {
    img = dataBinding.img;
  }
  let img1;
  if (onDataBindingChange != null) {
    img1 = onDataBindingChange.img;
  }
  const imageBinding = BaseRive.useImageBinding("img", instance, img, img1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.Username = ReactCompilerGating.isReactCompilerEnabled() ? (function UsernameBindings(arg0) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let ShadowVisibility;
  if (dataBinding != null) {
    ShadowVisibility = dataBinding.ShadowVisibility;
  }
  let ShadowVisibility1;
  if (onDataBindingChange != null) {
    ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
  }
  const numberBinding = BaseRive.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
  let StrokeVisibility;
  if (dataBinding != null) {
    StrokeVisibility = dataBinding.StrokeVisibility;
  }
  let StrokeVisibility1;
  if (onDataBindingChange != null) {
    StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
  }
  const numberBinding1 = BaseRive.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
  const tmpResult = BaseRive;
  let UsernameVisibility;
  if (dataBinding != null) {
    UsernameVisibility = dataBinding.UsernameVisibility;
  }
  let UsernameVisibility1;
  if (onDataBindingChange != null) {
    UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
  }
  const numberBinding2 = BaseRive.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
  const tmpResult6 = BaseRive;
  let Stroke;
  if (dataBinding != null) {
    Stroke = dataBinding.Stroke;
  }
  let Stroke1;
  if (onDataBindingChange != null) {
    Stroke1 = onDataBindingChange.Stroke;
  }
  const colorBinding = BaseRive.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
  const tmpResult7 = BaseRive;
  let Fill;
  if (dataBinding != null) {
    Fill = dataBinding.Fill;
  }
  let Fill1;
  if (onDataBindingChange != null) {
    Fill1 = onDataBindingChange.Fill;
  }
  const colorBinding1 = BaseRive.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let Username;
  if (dataBinding != null) {
    Username = dataBinding.Username;
  }
  let Username1;
  if (onDataBindingChange != null) {
    Username1 = onDataBindingChange.Username;
  }
  const stringBinding = BaseRive.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let img;
  if (dataBinding != null) {
    img = dataBinding.img;
  }
  let img1;
  if (onDataBindingChange != null) {
    img1 = onDataBindingChange.img;
  }
  const imageBinding = BaseRive.useImageBinding("img", instance, img, img1, playIfNeeded);
  return null;
}) : (function UsernameBindings(arg0) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let ShadowVisibility;
  if (dataBinding != null) {
    ShadowVisibility = dataBinding.ShadowVisibility;
  }
  let ShadowVisibility1;
  if (onDataBindingChange != null) {
    ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
  }
  const numberBinding = BaseRive.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
  let StrokeVisibility;
  if (dataBinding != null) {
    StrokeVisibility = dataBinding.StrokeVisibility;
  }
  let StrokeVisibility1;
  if (onDataBindingChange != null) {
    StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
  }
  const numberBinding1 = BaseRive.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
  const tmpResult = BaseRive;
  let UsernameVisibility;
  if (dataBinding != null) {
    UsernameVisibility = dataBinding.UsernameVisibility;
  }
  let UsernameVisibility1;
  if (onDataBindingChange != null) {
    UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
  }
  const numberBinding2 = BaseRive.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
  const tmpResult6 = BaseRive;
  let Stroke;
  if (dataBinding != null) {
    Stroke = dataBinding.Stroke;
  }
  let Stroke1;
  if (onDataBindingChange != null) {
    Stroke1 = onDataBindingChange.Stroke;
  }
  const colorBinding = BaseRive.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
  const tmpResult7 = BaseRive;
  let Fill;
  if (dataBinding != null) {
    Fill = dataBinding.Fill;
  }
  let Fill1;
  if (onDataBindingChange != null) {
    Fill1 = onDataBindingChange.Fill;
  }
  const colorBinding1 = BaseRive.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let Username;
  if (dataBinding != null) {
    Username = dataBinding.Username;
  }
  let Username1;
  if (onDataBindingChange != null) {
    Username1 = onDataBindingChange.Username;
  }
  const stringBinding = BaseRive.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let img;
  if (dataBinding != null) {
    img = dataBinding.img;
  }
  let img1;
  if (onDataBindingChange != null) {
    img1 = onDataBindingChange.img;
  }
  const imageBinding = BaseRive.useImageBinding("img", instance, img, img1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2["Friends 01 Rotation"] = ReactCompilerGating.isReactCompilerEnabled() ? (function Friends01RotationBindings(reducedMotionEnabled) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let twoFriends;
  if (dataBinding != null) {
    twoFriends = dataBinding.twoFriends;
  }
  let twoFriends1;
  if (onDataBindingChange != null) {
    twoFriends1 = onDataBindingChange.twoFriends;
  }
  const booleanBinding1 = BaseRive.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["Avatar01/ShadowVisibility"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
  }
  const numberBinding1 = BaseRive.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding["Avatar01/StrokeVisibility"];
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
  }
  const numberBinding2 = BaseRive.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
  const tmpResult38 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding["Avatar01/UsernameVisibility"];
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
  }
  const numberBinding3 = BaseRive.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
  const tmpResult39 = BaseRive;
  let prop6;
  if (dataBinding != null) {
    prop6 = dataBinding["Avatar01/Stroke"];
  }
  let prop7;
  if (onDataBindingChange != null) {
    prop7 = onDataBindingChange["Avatar01/Stroke"];
  }
  const colorBinding = BaseRive.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
  const tmpResult40 = BaseRive;
  let prop8;
  if (dataBinding != null) {
    prop8 = dataBinding["Avatar01/Fill"];
  }
  let prop9;
  if (onDataBindingChange != null) {
    prop9 = onDataBindingChange["Avatar01/Fill"];
  }
  const colorBinding1 = BaseRive.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
  const tmpResult41 = BaseRive;
  let prop10;
  if (dataBinding != null) {
    prop10 = dataBinding["Avatar01/Username"];
  }
  let prop11;
  if (onDataBindingChange != null) {
    prop11 = onDataBindingChange["Avatar01/Username"];
  }
  const stringBinding = BaseRive.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
  const tmpResult42 = BaseRive;
  let prop12;
  if (dataBinding != null) {
    prop12 = dataBinding["Avatar01/img"];
  }
  let prop13;
  if (onDataBindingChange != null) {
    prop13 = onDataBindingChange["Avatar01/img"];
  }
  const imageBinding = BaseRive.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
  const tmpResult43 = BaseRive;
  let prop14;
  if (dataBinding != null) {
    prop14 = dataBinding["Avatar02/ShadowVisibility"];
  }
  let prop15;
  if (onDataBindingChange != null) {
    prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
  }
  const numberBinding4 = BaseRive.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
  const tmpResult44 = BaseRive;
  let prop16;
  if (dataBinding != null) {
    prop16 = dataBinding["Avatar02/StrokeVisibility"];
  }
  let prop17;
  if (onDataBindingChange != null) {
    prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
  }
  const numberBinding5 = BaseRive.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
  const tmpResult45 = BaseRive;
  let prop18;
  if (dataBinding != null) {
    prop18 = dataBinding["Avatar02/UsernameVisibility"];
  }
  let prop19;
  if (onDataBindingChange != null) {
    prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
  }
  const numberBinding6 = BaseRive.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
  const tmpResult46 = BaseRive;
  let prop20;
  if (dataBinding != null) {
    prop20 = dataBinding["Avatar02/Stroke"];
  }
  let prop21;
  if (onDataBindingChange != null) {
    prop21 = onDataBindingChange["Avatar02/Stroke"];
  }
  const colorBinding2 = BaseRive.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
  const tmpResult47 = BaseRive;
  let prop22;
  if (dataBinding != null) {
    prop22 = dataBinding["Avatar02/Fill"];
  }
  let prop23;
  if (onDataBindingChange != null) {
    prop23 = onDataBindingChange["Avatar02/Fill"];
  }
  const colorBinding3 = BaseRive.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
  const tmpResult48 = BaseRive;
  let prop24;
  if (dataBinding != null) {
    prop24 = dataBinding["Avatar02/Username"];
  }
  let prop25;
  if (onDataBindingChange != null) {
    prop25 = onDataBindingChange["Avatar02/Username"];
  }
  const stringBinding1 = BaseRive.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
  const tmpResult49 = BaseRive;
  let prop26;
  if (dataBinding != null) {
    prop26 = dataBinding["Avatar02/img"];
  }
  let prop27;
  if (onDataBindingChange != null) {
    prop27 = onDataBindingChange["Avatar02/img"];
  }
  const imageBinding1 = BaseRive.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
  const tmpResult50 = BaseRive;
  let prop28;
  if (dataBinding != null) {
    prop28 = dataBinding["Avatar03/ShadowVisibility"];
  }
  let prop29;
  if (onDataBindingChange != null) {
    prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
  }
  const numberBinding7 = BaseRive.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
  const tmpResult51 = BaseRive;
  let prop30;
  if (dataBinding != null) {
    prop30 = dataBinding["Avatar03/StrokeVisibility"];
  }
  let prop31;
  if (onDataBindingChange != null) {
    prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
  }
  const numberBinding8 = BaseRive.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
  const tmpResult52 = BaseRive;
  let prop32;
  if (dataBinding != null) {
    prop32 = dataBinding["Avatar03/UsernameVisibility"];
  }
  let prop33;
  if (onDataBindingChange != null) {
    prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
  }
  const numberBinding9 = BaseRive.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
  const tmpResult53 = BaseRive;
  let prop34;
  if (dataBinding != null) {
    prop34 = dataBinding["Avatar03/Stroke"];
  }
  let prop35;
  if (onDataBindingChange != null) {
    prop35 = onDataBindingChange["Avatar03/Stroke"];
  }
  const colorBinding4 = BaseRive.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
  const tmpResult54 = BaseRive;
  let prop36;
  if (dataBinding != null) {
    prop36 = dataBinding["Avatar03/Fill"];
  }
  let prop37;
  if (onDataBindingChange != null) {
    prop37 = onDataBindingChange["Avatar03/Fill"];
  }
  const colorBinding5 = BaseRive.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
  const tmpResult55 = BaseRive;
  let prop38;
  if (dataBinding != null) {
    prop38 = dataBinding["Avatar03/Username"];
  }
  let prop39;
  if (onDataBindingChange != null) {
    prop39 = onDataBindingChange["Avatar03/Username"];
  }
  const stringBinding2 = BaseRive.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
  const tmpResult56 = BaseRive;
  let prop40;
  if (dataBinding != null) {
    prop40 = dataBinding["Avatar03/img"];
  }
  let prop41;
  if (onDataBindingChange != null) {
    prop41 = onDataBindingChange["Avatar03/img"];
  }
  const imageBinding2 = BaseRive.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
  const tmpResult57 = BaseRive;
  let prop42;
  if (dataBinding != null) {
    prop42 = dataBinding["Avatar04/ShadowVisibility"];
  }
  let prop43;
  if (onDataBindingChange != null) {
    prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
  }
  const numberBinding10 = BaseRive.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
  const tmpResult58 = BaseRive;
  let prop44;
  if (dataBinding != null) {
    prop44 = dataBinding["Avatar04/StrokeVisibility"];
  }
  let prop45;
  if (onDataBindingChange != null) {
    prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
  }
  const numberBinding11 = BaseRive.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
  const tmpResult59 = BaseRive;
  let prop46;
  if (dataBinding != null) {
    prop46 = dataBinding["Avatar04/UsernameVisibility"];
  }
  let prop47;
  if (onDataBindingChange != null) {
    prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
  }
  const numberBinding12 = BaseRive.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
  const tmpResult60 = BaseRive;
  let prop48;
  if (dataBinding != null) {
    prop48 = dataBinding["Avatar04/Stroke"];
  }
  let prop49;
  if (onDataBindingChange != null) {
    prop49 = onDataBindingChange["Avatar04/Stroke"];
  }
  const colorBinding6 = BaseRive.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
  const tmpResult61 = BaseRive;
  let prop50;
  if (dataBinding != null) {
    prop50 = dataBinding["Avatar04/Fill"];
  }
  let prop51;
  if (onDataBindingChange != null) {
    prop51 = onDataBindingChange["Avatar04/Fill"];
  }
  const colorBinding7 = BaseRive.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
  const tmpResult62 = BaseRive;
  let prop52;
  if (dataBinding != null) {
    prop52 = dataBinding["Avatar04/Username"];
  }
  let prop53;
  if (onDataBindingChange != null) {
    prop53 = onDataBindingChange["Avatar04/Username"];
  }
  const stringBinding3 = BaseRive.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop54;
  if (dataBinding != null) {
    prop54 = dataBinding["Avatar04/img"];
  }
  let prop55;
  if (onDataBindingChange != null) {
    prop55 = onDataBindingChange["Avatar04/img"];
  }
  const imageBinding3 = BaseRive.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop56;
  if (dataBinding != null) {
    prop56 = dataBinding["Avatar05/ShadowVisibility"];
  }
  let prop57;
  if (onDataBindingChange != null) {
    prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
  }
  const numberBinding13 = BaseRive.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
  const tmpResult65 = BaseRive;
  let prop58;
  if (dataBinding != null) {
    prop58 = dataBinding["Avatar05/StrokeVisibility"];
  }
  let prop59;
  if (onDataBindingChange != null) {
    prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
  }
  const numberBinding14 = BaseRive.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
  const tmpResult66 = BaseRive;
  let prop60;
  if (dataBinding != null) {
    prop60 = dataBinding["Avatar05/UsernameVisibility"];
  }
  let prop61;
  if (onDataBindingChange != null) {
    prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
  }
  const numberBinding15 = BaseRive.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
  const tmpResult67 = BaseRive;
  let prop62;
  if (dataBinding != null) {
    prop62 = dataBinding["Avatar05/Stroke"];
  }
  let prop63;
  if (onDataBindingChange != null) {
    prop63 = onDataBindingChange["Avatar05/Stroke"];
  }
  const colorBinding8 = BaseRive.useColorBinding("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop64;
  if (dataBinding != null) {
    prop64 = dataBinding["Avatar05/Fill"];
  }
  let prop65;
  if (onDataBindingChange != null) {
    prop65 = onDataBindingChange["Avatar05/Fill"];
  }
  const colorBinding9 = BaseRive.useColorBinding("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
  const tmpResult69 = BaseRive;
  let prop66;
  if (dataBinding != null) {
    prop66 = dataBinding["Avatar05/Username"];
  }
  let prop67;
  if (onDataBindingChange != null) {
    prop67 = onDataBindingChange["Avatar05/Username"];
  }
  const stringBinding4 = BaseRive.useStringBinding("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
  const tmpResult70 = BaseRive;
  let prop68;
  if (dataBinding != null) {
    prop68 = dataBinding["Avatar05/img"];
  }
  let prop69;
  if (onDataBindingChange != null) {
    prop69 = onDataBindingChange["Avatar05/img"];
  }
  const imageBinding4 = BaseRive.useImageBinding("Avatar05/img", instance, prop68, prop69, playIfNeeded);
  const tmpResult71 = BaseRive;
  let ConnectorColor;
  if (dataBinding != null) {
    ConnectorColor = dataBinding.ConnectorColor;
  }
  let ConnectorColor1;
  if (onDataBindingChange != null) {
    ConnectorColor1 = onDataBindingChange.ConnectorColor;
  }
  const colorBinding10 = BaseRive.useColorBinding("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
  return null;
}) : (function Friends01RotationBindings(reducedMotionEnabled) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let twoFriends;
  if (dataBinding != null) {
    twoFriends = dataBinding.twoFriends;
  }
  let twoFriends1;
  if (onDataBindingChange != null) {
    twoFriends1 = onDataBindingChange.twoFriends;
  }
  const booleanBinding1 = BaseRive.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["Avatar01/ShadowVisibility"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
  }
  const numberBinding1 = BaseRive.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding["Avatar01/StrokeVisibility"];
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
  }
  const numberBinding2 = BaseRive.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
  const tmpResult38 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding["Avatar01/UsernameVisibility"];
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
  }
  const numberBinding3 = BaseRive.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
  const tmpResult39 = BaseRive;
  let prop6;
  if (dataBinding != null) {
    prop6 = dataBinding["Avatar01/Stroke"];
  }
  let prop7;
  if (onDataBindingChange != null) {
    prop7 = onDataBindingChange["Avatar01/Stroke"];
  }
  const colorBinding = BaseRive.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
  const tmpResult40 = BaseRive;
  let prop8;
  if (dataBinding != null) {
    prop8 = dataBinding["Avatar01/Fill"];
  }
  let prop9;
  if (onDataBindingChange != null) {
    prop9 = onDataBindingChange["Avatar01/Fill"];
  }
  const colorBinding1 = BaseRive.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
  const tmpResult41 = BaseRive;
  let prop10;
  if (dataBinding != null) {
    prop10 = dataBinding["Avatar01/Username"];
  }
  let prop11;
  if (onDataBindingChange != null) {
    prop11 = onDataBindingChange["Avatar01/Username"];
  }
  const stringBinding = BaseRive.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
  const tmpResult42 = BaseRive;
  let prop12;
  if (dataBinding != null) {
    prop12 = dataBinding["Avatar01/img"];
  }
  let prop13;
  if (onDataBindingChange != null) {
    prop13 = onDataBindingChange["Avatar01/img"];
  }
  const imageBinding = BaseRive.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
  const tmpResult43 = BaseRive;
  let prop14;
  if (dataBinding != null) {
    prop14 = dataBinding["Avatar02/ShadowVisibility"];
  }
  let prop15;
  if (onDataBindingChange != null) {
    prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
  }
  const numberBinding4 = BaseRive.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
  const tmpResult44 = BaseRive;
  let prop16;
  if (dataBinding != null) {
    prop16 = dataBinding["Avatar02/StrokeVisibility"];
  }
  let prop17;
  if (onDataBindingChange != null) {
    prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
  }
  const numberBinding5 = BaseRive.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
  const tmpResult45 = BaseRive;
  let prop18;
  if (dataBinding != null) {
    prop18 = dataBinding["Avatar02/UsernameVisibility"];
  }
  let prop19;
  if (onDataBindingChange != null) {
    prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
  }
  const numberBinding6 = BaseRive.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
  const tmpResult46 = BaseRive;
  let prop20;
  if (dataBinding != null) {
    prop20 = dataBinding["Avatar02/Stroke"];
  }
  let prop21;
  if (onDataBindingChange != null) {
    prop21 = onDataBindingChange["Avatar02/Stroke"];
  }
  const colorBinding2 = BaseRive.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
  const tmpResult47 = BaseRive;
  let prop22;
  if (dataBinding != null) {
    prop22 = dataBinding["Avatar02/Fill"];
  }
  let prop23;
  if (onDataBindingChange != null) {
    prop23 = onDataBindingChange["Avatar02/Fill"];
  }
  const colorBinding3 = BaseRive.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
  const tmpResult48 = BaseRive;
  let prop24;
  if (dataBinding != null) {
    prop24 = dataBinding["Avatar02/Username"];
  }
  let prop25;
  if (onDataBindingChange != null) {
    prop25 = onDataBindingChange["Avatar02/Username"];
  }
  const stringBinding1 = BaseRive.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
  const tmpResult49 = BaseRive;
  let prop26;
  if (dataBinding != null) {
    prop26 = dataBinding["Avatar02/img"];
  }
  let prop27;
  if (onDataBindingChange != null) {
    prop27 = onDataBindingChange["Avatar02/img"];
  }
  const imageBinding1 = BaseRive.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
  const tmpResult50 = BaseRive;
  let prop28;
  if (dataBinding != null) {
    prop28 = dataBinding["Avatar03/ShadowVisibility"];
  }
  let prop29;
  if (onDataBindingChange != null) {
    prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
  }
  const numberBinding7 = BaseRive.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
  const tmpResult51 = BaseRive;
  let prop30;
  if (dataBinding != null) {
    prop30 = dataBinding["Avatar03/StrokeVisibility"];
  }
  let prop31;
  if (onDataBindingChange != null) {
    prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
  }
  const numberBinding8 = BaseRive.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
  const tmpResult52 = BaseRive;
  let prop32;
  if (dataBinding != null) {
    prop32 = dataBinding["Avatar03/UsernameVisibility"];
  }
  let prop33;
  if (onDataBindingChange != null) {
    prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
  }
  const numberBinding9 = BaseRive.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
  const tmpResult53 = BaseRive;
  let prop34;
  if (dataBinding != null) {
    prop34 = dataBinding["Avatar03/Stroke"];
  }
  let prop35;
  if (onDataBindingChange != null) {
    prop35 = onDataBindingChange["Avatar03/Stroke"];
  }
  const colorBinding4 = BaseRive.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
  const tmpResult54 = BaseRive;
  let prop36;
  if (dataBinding != null) {
    prop36 = dataBinding["Avatar03/Fill"];
  }
  let prop37;
  if (onDataBindingChange != null) {
    prop37 = onDataBindingChange["Avatar03/Fill"];
  }
  const colorBinding5 = BaseRive.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
  const tmpResult55 = BaseRive;
  let prop38;
  if (dataBinding != null) {
    prop38 = dataBinding["Avatar03/Username"];
  }
  let prop39;
  if (onDataBindingChange != null) {
    prop39 = onDataBindingChange["Avatar03/Username"];
  }
  const stringBinding2 = BaseRive.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
  const tmpResult56 = BaseRive;
  let prop40;
  if (dataBinding != null) {
    prop40 = dataBinding["Avatar03/img"];
  }
  let prop41;
  if (onDataBindingChange != null) {
    prop41 = onDataBindingChange["Avatar03/img"];
  }
  const imageBinding2 = BaseRive.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
  const tmpResult57 = BaseRive;
  let prop42;
  if (dataBinding != null) {
    prop42 = dataBinding["Avatar04/ShadowVisibility"];
  }
  let prop43;
  if (onDataBindingChange != null) {
    prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
  }
  const numberBinding10 = BaseRive.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
  const tmpResult58 = BaseRive;
  let prop44;
  if (dataBinding != null) {
    prop44 = dataBinding["Avatar04/StrokeVisibility"];
  }
  let prop45;
  if (onDataBindingChange != null) {
    prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
  }
  const numberBinding11 = BaseRive.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
  const tmpResult59 = BaseRive;
  let prop46;
  if (dataBinding != null) {
    prop46 = dataBinding["Avatar04/UsernameVisibility"];
  }
  let prop47;
  if (onDataBindingChange != null) {
    prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
  }
  const numberBinding12 = BaseRive.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
  const tmpResult60 = BaseRive;
  let prop48;
  if (dataBinding != null) {
    prop48 = dataBinding["Avatar04/Stroke"];
  }
  let prop49;
  if (onDataBindingChange != null) {
    prop49 = onDataBindingChange["Avatar04/Stroke"];
  }
  const colorBinding6 = BaseRive.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
  const tmpResult61 = BaseRive;
  let prop50;
  if (dataBinding != null) {
    prop50 = dataBinding["Avatar04/Fill"];
  }
  let prop51;
  if (onDataBindingChange != null) {
    prop51 = onDataBindingChange["Avatar04/Fill"];
  }
  const colorBinding7 = BaseRive.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
  const tmpResult62 = BaseRive;
  let prop52;
  if (dataBinding != null) {
    prop52 = dataBinding["Avatar04/Username"];
  }
  let prop53;
  if (onDataBindingChange != null) {
    prop53 = onDataBindingChange["Avatar04/Username"];
  }
  const stringBinding3 = BaseRive.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop54;
  if (dataBinding != null) {
    prop54 = dataBinding["Avatar04/img"];
  }
  let prop55;
  if (onDataBindingChange != null) {
    prop55 = onDataBindingChange["Avatar04/img"];
  }
  const imageBinding3 = BaseRive.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop56;
  if (dataBinding != null) {
    prop56 = dataBinding["Avatar05/ShadowVisibility"];
  }
  let prop57;
  if (onDataBindingChange != null) {
    prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
  }
  const numberBinding13 = BaseRive.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
  const tmpResult65 = BaseRive;
  let prop58;
  if (dataBinding != null) {
    prop58 = dataBinding["Avatar05/StrokeVisibility"];
  }
  let prop59;
  if (onDataBindingChange != null) {
    prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
  }
  const numberBinding14 = BaseRive.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
  const tmpResult66 = BaseRive;
  let prop60;
  if (dataBinding != null) {
    prop60 = dataBinding["Avatar05/UsernameVisibility"];
  }
  let prop61;
  if (onDataBindingChange != null) {
    prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
  }
  const numberBinding15 = BaseRive.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
  const tmpResult67 = BaseRive;
  let prop62;
  if (dataBinding != null) {
    prop62 = dataBinding["Avatar05/Stroke"];
  }
  let prop63;
  if (onDataBindingChange != null) {
    prop63 = onDataBindingChange["Avatar05/Stroke"];
  }
  const colorBinding8 = BaseRive.useColorBinding("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop64;
  if (dataBinding != null) {
    prop64 = dataBinding["Avatar05/Fill"];
  }
  let prop65;
  if (onDataBindingChange != null) {
    prop65 = onDataBindingChange["Avatar05/Fill"];
  }
  const colorBinding9 = BaseRive.useColorBinding("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
  const tmpResult69 = BaseRive;
  let prop66;
  if (dataBinding != null) {
    prop66 = dataBinding["Avatar05/Username"];
  }
  let prop67;
  if (onDataBindingChange != null) {
    prop67 = onDataBindingChange["Avatar05/Username"];
  }
  const stringBinding4 = BaseRive.useStringBinding("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
  const tmpResult70 = BaseRive;
  let prop68;
  if (dataBinding != null) {
    prop68 = dataBinding["Avatar05/img"];
  }
  let prop69;
  if (onDataBindingChange != null) {
    prop69 = onDataBindingChange["Avatar05/img"];
  }
  const imageBinding4 = BaseRive.useImageBinding("Avatar05/img", instance, prop68, prop69, playIfNeeded);
  const tmpResult71 = BaseRive;
  let ConnectorColor;
  if (dataBinding != null) {
    ConnectorColor = dataBinding.ConnectorColor;
  }
  let ConnectorColor1;
  if (onDataBindingChange != null) {
    ConnectorColor1 = onDataBindingChange.ConnectorColor;
  }
  const colorBinding10 = BaseRive.useColorBinding("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointFriendsRiveInner(arg0) {
  const cResult = require("c").c(19);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    cResult[1] = dataBinding;
    cResult[2] = onDataBindingChange;
    cResult[3] = ref;
    cResult[4] = tmp13;
    cResult[5] = stateMachine;
    cResult[6] = artboard;
    cResult[7] = defaultViewModelInstance;
    let tmp10 = defaultViewModelInstance;
    let tmp9 = artboard;
    let tmp8 = stateMachine;
    let tmp7 = tmp13;
    let tmp6 = ref;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "MAIN";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "threeFriends";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  if (cResult[8] === str) {
    if (cResult[9] === dataBinding) {
      if (cResult[10] === onDataBindingChange) {
        let tmp14 = cResult[11];
      }
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp8) {
                  let tmp15 = cResult[18];
                }
                return tmp15;
              }
            }
          }
        }
      }
      obj2 = { ref: tmp6, src: require("module_4909"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: tmp14 };
      let merged = Object.assign(tmp7);
      const tmp23 = jsx(tmp(tmp2[4]).BaseRive, { ref: tmp6, src: require("module_4909"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: tmp14 });
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp23;
      tmp15 = tmp23;
    }
  }
  const fn = function f(arg0) {
    let tmp2 = null;
    if (null != obj2[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  };
  cResult[8] = str;
  cResult[9] = dataBinding;
  cResult[10] = onDataBindingChange;
  cResult[11] = fn;
  tmp14 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function CheckpointFriendsRiveInner(defaultViewModelInstance) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "MAIN";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "threeFriends";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj2[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[4]).BaseRive, { ref: defaultViewModelInstance.ref, src: dataBinding(onDataBindingChange[6]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx");

export const CheckpointFriendsRive = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointFriendsRiveWithBoundary(fallback) {
  const cResult = c.c(5);
  if (cResult[0] !== fallback) {
    obj2 = {};
    const merged = Object.assign(fallback);
    const tmp10 = <closure_11 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    if (cResult[3] === tmp4) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { fallback: fallback.fallback, children: tmp4 };
}) : (function CheckpointFriendsRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_11 />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
});