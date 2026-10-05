// === Module 4670: CheckpointFriendsRive ===

// Module 4670 (CheckpointFriendsRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 4606 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4659 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dataBinding, importDefault, reducedMotionEnabled, tmp3, tmp5;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { MAIN: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Sidekick: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Avatar: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, Username: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, "Friends 01 Rotation": { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" } };
const artboardViewModelInstances = { MAIN: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Sidekick: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Avatar: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], Username: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], "Friends 01 Rotation": ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  MAIN: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let prop;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding2 = useNumberBinding2("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding3 = useNumberBinding3("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    let prop4;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding4 = useNumberBinding4("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    let prop6;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    let prop8;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding2 = useColorBinding2("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    let prop10;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    let prop12;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    let prop14;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding5 = useNumberBinding5("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    let prop16;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding6 = useNumberBinding6("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    let prop18;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding7 = useNumberBinding7("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    let prop20;
    const useColorBinding3 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding3 = useColorBinding3("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    let prop22;
    const useColorBinding4 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding4 = useColorBinding4("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    let prop24;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding2 = useStringBinding2("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    let prop26;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding2 = useImageBinding2("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    let prop28;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding8 = useNumberBinding8("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    let prop30;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding9 = useNumberBinding9("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    let prop32;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding10 = useNumberBinding10("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    let prop34;
    const useColorBinding5 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding5 = useColorBinding5("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    let prop36;
    const useColorBinding6 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding6 = useColorBinding6("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    let prop38;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding3 = useStringBinding3("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    let prop40;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding3 = useImageBinding3("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    let prop42;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding11 = useNumberBinding11("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    let prop44;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding12 = useNumberBinding12("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    let prop46;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding13 = useNumberBinding13("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    let prop48;
    const useColorBinding7 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding7 = useColorBinding7("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    let prop50;
    const useColorBinding8 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding8 = useColorBinding8("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    let prop52;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding4 = useStringBinding4("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    let prop54;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding4 = useImageBinding4("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    let prop56;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding14 = useNumberBinding14("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    let prop58;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding15 = useNumberBinding15("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    let prop60;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding16 = useNumberBinding16("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    let prop62;
    const useColorBinding9 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding9 = useColorBinding9("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    let prop64;
    const useColorBinding10 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding10 = useColorBinding10("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    let prop66;
    const useStringBinding5 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding5 = useStringBinding5("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    let prop68;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding5 = useImageBinding5("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    let ConnectorColor;
    const useColorBinding11 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding11 = useColorBinding11("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let prop;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding2 = useNumberBinding2("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding3 = useNumberBinding3("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    let prop4;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding4 = useNumberBinding4("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    let prop6;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    let prop8;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding2 = useColorBinding2("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    let prop10;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    let prop12;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    let prop14;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding5 = useNumberBinding5("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    let prop16;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding6 = useNumberBinding6("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    let prop18;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding7 = useNumberBinding7("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    let prop20;
    const useColorBinding3 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding3 = useColorBinding3("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    let prop22;
    const useColorBinding4 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding4 = useColorBinding4("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    let prop24;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding2 = useStringBinding2("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    let prop26;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding2 = useImageBinding2("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    let prop28;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding8 = useNumberBinding8("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    let prop30;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding9 = useNumberBinding9("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    let prop32;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding10 = useNumberBinding10("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    let prop34;
    const useColorBinding5 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding5 = useColorBinding5("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    let prop36;
    const useColorBinding6 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding6 = useColorBinding6("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    let prop38;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding3 = useStringBinding3("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    let prop40;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding3 = useImageBinding3("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    let prop42;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding11 = useNumberBinding11("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    let prop44;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding12 = useNumberBinding12("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    let prop46;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding13 = useNumberBinding13("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    let prop48;
    const useColorBinding7 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding7 = useColorBinding7("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    let prop50;
    const useColorBinding8 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding8 = useColorBinding8("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    let prop52;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding4 = useStringBinding4("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    let prop54;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding4 = useImageBinding4("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    let prop56;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding14 = useNumberBinding14("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    let prop58;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding15 = useNumberBinding15("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    let prop60;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding16 = useNumberBinding16("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    let prop62;
    const useColorBinding9 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding9 = useColorBinding9("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    let prop64;
    const useColorBinding10 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding10 = useColorBinding10("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    let prop66;
    const useStringBinding5 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding5 = useStringBinding5("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    let prop68;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding5 = useImageBinding5("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    let ConnectorColor;
    const useColorBinding11 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding11 = useColorBinding11("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }),
  Sidekick: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let prop;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding2 = useNumberBinding2("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding3 = useNumberBinding3("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    let prop4;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding4 = useNumberBinding4("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    let prop6;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    let prop8;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding2 = useColorBinding2("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    let prop10;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    let prop12;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    let prop14;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding5 = useNumberBinding5("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    let prop16;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding6 = useNumberBinding6("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    let prop18;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding7 = useNumberBinding7("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    let prop20;
    const useColorBinding3 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding3 = useColorBinding3("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    let prop22;
    const useColorBinding4 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding4 = useColorBinding4("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    let prop24;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding2 = useStringBinding2("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    let prop26;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding2 = useImageBinding2("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    let prop28;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding8 = useNumberBinding8("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    let prop30;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding9 = useNumberBinding9("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    let prop32;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding10 = useNumberBinding10("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    let prop34;
    const useColorBinding5 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding5 = useColorBinding5("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    let prop36;
    const useColorBinding6 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding6 = useColorBinding6("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    let prop38;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding3 = useStringBinding3("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    let prop40;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding3 = useImageBinding3("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    let prop42;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding11 = useNumberBinding11("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    let prop44;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding12 = useNumberBinding12("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    let prop46;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding13 = useNumberBinding13("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    let prop48;
    const useColorBinding7 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding7 = useColorBinding7("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    let prop50;
    const useColorBinding8 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding8 = useColorBinding8("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    let prop52;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding4 = useStringBinding4("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    let prop54;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding4 = useImageBinding4("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    let prop56;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding14 = useNumberBinding14("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    let prop58;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding15 = useNumberBinding15("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    let prop60;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding16 = useNumberBinding16("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    let prop62;
    const useColorBinding9 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding9 = useColorBinding9("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    let prop64;
    const useColorBinding10 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding10 = useColorBinding10("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    let prop66;
    const useStringBinding5 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding5 = useStringBinding5("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    let prop68;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding5 = useImageBinding5("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    let ConnectorColor;
    const useColorBinding11 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding11 = useColorBinding11("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let prop;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding2 = useNumberBinding2("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding3 = useNumberBinding3("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    let prop4;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding4 = useNumberBinding4("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    let prop6;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    let prop8;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding2 = useColorBinding2("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    let prop10;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    let prop12;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    let prop14;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding5 = useNumberBinding5("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    let prop16;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding6 = useNumberBinding6("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    let prop18;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding7 = useNumberBinding7("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    let prop20;
    const useColorBinding3 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding3 = useColorBinding3("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    let prop22;
    const useColorBinding4 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding4 = useColorBinding4("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    let prop24;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding2 = useStringBinding2("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    let prop26;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding2 = useImageBinding2("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    let prop28;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding8 = useNumberBinding8("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    let prop30;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding9 = useNumberBinding9("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    let prop32;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding10 = useNumberBinding10("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    let prop34;
    const useColorBinding5 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding5 = useColorBinding5("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    let prop36;
    const useColorBinding6 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding6 = useColorBinding6("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    let prop38;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding3 = useStringBinding3("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    let prop40;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding3 = useImageBinding3("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    let prop42;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding11 = useNumberBinding11("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    let prop44;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding12 = useNumberBinding12("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    let prop46;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding13 = useNumberBinding13("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    let prop48;
    const useColorBinding7 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding7 = useColorBinding7("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    let prop50;
    const useColorBinding8 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding8 = useColorBinding8("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    let prop52;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding4 = useStringBinding4("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    let prop54;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding4 = useImageBinding4("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    let prop56;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding14 = useNumberBinding14("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    let prop58;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding15 = useNumberBinding15("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    let prop60;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding16 = useNumberBinding16("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    let prop62;
    const useColorBinding9 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding9 = useColorBinding9("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    let prop64;
    const useColorBinding10 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding10 = useColorBinding10("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    let prop66;
    const useStringBinding5 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding5 = useStringBinding5("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    let prop68;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding5 = useImageBinding5("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    let ConnectorColor;
    const useColorBinding11 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding11 = useColorBinding11("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }),
  Avatar: ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (onDataBindingChange != null) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    let StrokeVisibility;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (onDataBindingChange != null) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding2 = useNumberBinding2("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    let UsernameVisibility;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (onDataBindingChange != null) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding3 = useNumberBinding3("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    let Stroke;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (onDataBindingChange != null) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    let Fill;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (onDataBindingChange != null) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding2 = useColorBinding2("Fill", instance, Fill, Fill1, playIfNeeded);
    let Username;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (onDataBindingChange != null) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    let img;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      img = dataBinding.img;
    }
    let img1;
    if (onDataBindingChange != null) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (onDataBindingChange != null) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    let StrokeVisibility;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (onDataBindingChange != null) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding2 = useNumberBinding2("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    let UsernameVisibility;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (onDataBindingChange != null) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding3 = useNumberBinding3("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    let Stroke;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (onDataBindingChange != null) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    let Fill;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (onDataBindingChange != null) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding2 = useColorBinding2("Fill", instance, Fill, Fill1, playIfNeeded);
    let Username;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (onDataBindingChange != null) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    let img;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      img = dataBinding.img;
    }
    let img1;
    if (onDataBindingChange != null) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  }),
  Username: ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (onDataBindingChange != null) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    let StrokeVisibility;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (onDataBindingChange != null) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding2 = useNumberBinding2("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    let UsernameVisibility;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (onDataBindingChange != null) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding3 = useNumberBinding3("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    let Stroke;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (onDataBindingChange != null) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    let Fill;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (onDataBindingChange != null) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding2 = useColorBinding2("Fill", instance, Fill, Fill1, playIfNeeded);
    let Username;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (onDataBindingChange != null) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    let img;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      img = dataBinding.img;
    }
    let img1;
    if (onDataBindingChange != null) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (onDataBindingChange != null) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    let StrokeVisibility;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (onDataBindingChange != null) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding2 = useNumberBinding2("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    let UsernameVisibility;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (onDataBindingChange != null) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding3 = useNumberBinding3("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    let Stroke;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (onDataBindingChange != null) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    let Fill;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (onDataBindingChange != null) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding2 = useColorBinding2("Fill", instance, Fill, Fill1, playIfNeeded);
    let Username;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (onDataBindingChange != null) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    let img;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      img = dataBinding.img;
    }
    let img1;
    if (onDataBindingChange != null) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  }),
  "Friends 01 Rotation": ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let prop;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding2 = useNumberBinding2("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding3 = useNumberBinding3("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    let prop4;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding4 = useNumberBinding4("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    let prop6;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    let prop8;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding2 = useColorBinding2("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    let prop10;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    let prop12;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    let prop14;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding5 = useNumberBinding5("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    let prop16;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding6 = useNumberBinding6("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    let prop18;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding7 = useNumberBinding7("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    let prop20;
    const useColorBinding3 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding3 = useColorBinding3("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    let prop22;
    const useColorBinding4 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding4 = useColorBinding4("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    let prop24;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding2 = useStringBinding2("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    let prop26;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding2 = useImageBinding2("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    let prop28;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding8 = useNumberBinding8("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    let prop30;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding9 = useNumberBinding9("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    let prop32;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding10 = useNumberBinding10("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    let prop34;
    const useColorBinding5 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding5 = useColorBinding5("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    let prop36;
    const useColorBinding6 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding6 = useColorBinding6("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    let prop38;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding3 = useStringBinding3("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    let prop40;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding3 = useImageBinding3("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    let prop42;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding11 = useNumberBinding11("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    let prop44;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding12 = useNumberBinding12("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    let prop46;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding13 = useNumberBinding13("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    let prop48;
    const useColorBinding7 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding7 = useColorBinding7("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    let prop50;
    const useColorBinding8 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding8 = useColorBinding8("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    let prop52;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding4 = useStringBinding4("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    let prop54;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding4 = useImageBinding4("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    let prop56;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding14 = useNumberBinding14("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    let prop58;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding15 = useNumberBinding15("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    let prop60;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding16 = useNumberBinding16("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    let prop62;
    const useColorBinding9 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding9 = useColorBinding9("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    let prop64;
    const useColorBinding10 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding10 = useColorBinding10("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    let prop66;
    const useStringBinding5 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding5 = useStringBinding5("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    let prop68;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding5 = useImageBinding5("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    let ConnectorColor;
    const useColorBinding11 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding11 = useColorBinding11("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let twoFriends;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let prop;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding2 = useNumberBinding2("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding3 = useNumberBinding3("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    let prop4;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding4 = useNumberBinding4("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    let prop6;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    let prop8;
    const useColorBinding2 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding2 = useColorBinding2("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    let prop10;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    let prop12;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    let prop14;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding5 = useNumberBinding5("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    let prop16;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding6 = useNumberBinding6("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    let prop18;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding7 = useNumberBinding7("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    let prop20;
    const useColorBinding3 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding3 = useColorBinding3("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    let prop22;
    const useColorBinding4 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding4 = useColorBinding4("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    let prop24;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding2 = useStringBinding2("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    let prop26;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding2 = useImageBinding2("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    let prop28;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding8 = useNumberBinding8("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    let prop30;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding9 = useNumberBinding9("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    let prop32;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding10 = useNumberBinding10("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    let prop34;
    const useColorBinding5 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding5 = useColorBinding5("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    let prop36;
    const useColorBinding6 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding6 = useColorBinding6("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    let prop38;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding3 = useStringBinding3("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    let prop40;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding3 = useImageBinding3("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    let prop42;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding11 = useNumberBinding11("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    let prop44;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding12 = useNumberBinding12("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    let prop46;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding13 = useNumberBinding13("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    let prop48;
    const useColorBinding7 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding7 = useColorBinding7("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    let prop50;
    const useColorBinding8 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding8 = useColorBinding8("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    let prop52;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding4 = useStringBinding4("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    let prop54;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding4 = useImageBinding4("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    let prop56;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding14 = useNumberBinding14("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    let prop58;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding15 = useNumberBinding15("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    let prop60;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (onDataBindingChange != null) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    const numberBinding16 = useNumberBinding16("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    let prop62;
    const useColorBinding9 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop62 = dataBinding["Avatar05/Stroke"];
    }
    let prop63;
    if (onDataBindingChange != null) {
      prop63 = onDataBindingChange["Avatar05/Stroke"];
    }
    const colorBinding9 = useColorBinding9("Avatar05/Stroke", instance, prop62, prop63, playIfNeeded);
    let prop64;
    const useColorBinding10 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop64 = dataBinding["Avatar05/Fill"];
    }
    let prop65;
    if (onDataBindingChange != null) {
      prop65 = onDataBindingChange["Avatar05/Fill"];
    }
    const colorBinding10 = useColorBinding10("Avatar05/Fill", instance, prop64, prop65, playIfNeeded);
    let prop66;
    const useStringBinding5 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop66 = dataBinding["Avatar05/Username"];
    }
    let prop67;
    if (onDataBindingChange != null) {
      prop67 = onDataBindingChange["Avatar05/Username"];
    }
    const stringBinding5 = useStringBinding5("Avatar05/Username", instance, prop66, prop67, playIfNeeded);
    let prop68;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop68 = dataBinding["Avatar05/img"];
    }
    let prop69;
    if (onDataBindingChange != null) {
      prop69 = onDataBindingChange["Avatar05/img"];
    }
    const imageBinding5 = useImageBinding5("Avatar05/img", instance, prop68, prop69, playIfNeeded);
    let ConnectorColor;
    const useColorBinding11 = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      ConnectorColor = dataBinding.ConnectorColor;
    }
    let ConnectorColor1;
    if (onDataBindingChange != null) {
      ConnectorColor1 = onDataBindingChange.ConnectorColor;
    }
    const colorBinding11 = useColorBinding11("ConnectorColor", instance, ConnectorColor, ConnectorColor1, playIfNeeded);
    return null;
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let _require;
  let artboard;
  let defaultViewModelInstance;
  let fallback;
  let onDataBindingChange;
  let stateMachine;
  let str;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = str;
  obj = require("react");
  const cResult = obj.c(18);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    class I {
      constructor(arg0) {
        tmp = closure_10[closure_2];
        tmp2 = null;
        if (null != tmp) {
          tmp3 = arg0;
          tmp4 = jsx;
          obj = {};
          tmp5 = obj;
          merged = Object.assign(arg0);
          tmp7 = closure_0;
          obj.dataBinding = closure_0;
          tmp8 = closure_1;
          obj.onDataBindingChange = closure_1;
          tmp2 = jsx(tmp, obj);
        }
        return tmp2;
      }
    }
    cResult[2] = onDataBindingChange;
    cResult[3] = tmp12;
    cResult[4] = stateMachine;
    cResult[5] = artboard;
    cResult[6] = defaultViewModelInstance;
    tmp9 = defaultViewModelInstance;
    tmp8 = artboard;
    tmp7 = stateMachine;
    tmp6 = tmp12;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  str = "MAIN";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  let str2 = "threeFriends";
  if (undefined !== tmp9) {
    str2 = tmp9;
  }
  if (cResult[7] === str) {
    if (cResult[8] === dataBinding) {
      let tmp13;
      if (cResult[9] === onDataBindingChange) {
        tmp13 = cResult[10];
      }
      if (cResult[11] === str) {
        if (cResult[12] === str2) {
          if (cResult[13] === ref) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp6) {
                let tmp15;
                if (cResult[16] === tmp7) {
                  tmp15 = cResult[17];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const BaseRive = tmp(tmp2[4]).BaseRive;
      class I {
        constructor(arg0) {
          tmp = closure_10[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      let merged = Object.assign(tmp6);
      const tmp23 = <BaseRive ref={ref} src={require("module_4671")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={null} stateMachine={tmp7} renderDataBinding={tmp13} />;
      cResult[11] = str;
      cResult[12] = str2;
      cResult[13] = ref;
      cResult[14] = tmp13;
      cResult[15] = tmp6;
      cResult[16] = tmp7;
      cResult[17] = tmp23;
      tmp15 = tmp23;
    }
  }
  class I {
    constructor(arg0) {
      tmp = closure_10[closure_2];
      tmp2 = null;
      if (null != tmp) {
        tmp3 = arg0;
        tmp4 = jsx;
        obj = {};
        tmp5 = obj;
        merged = Object.assign(arg0);
        tmp7 = closure_0;
        obj.dataBinding = closure_0;
        tmp8 = closure_1;
        obj.onDataBindingChange = closure_1;
        tmp2 = jsx(tmp, obj);
      }
      return tmp2;
    }
  }
  cResult[7] = str;
  cResult[8] = dataBinding;
  cResult[9] = onDataBindingChange;
  cResult[10] = I;
  tmp13 = I;
}) : ((defaultViewModelInstance, ref) => {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "MAIN";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "threeFriends";
  const stateMachine = defaultViewModelInstance.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[4]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={dataBinding(onDataBindingChange[6])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((fallback, ref) => {
  obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === fallback) {
    let tmp4;
    if (cResult[1] === ref) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === fallback.fallback) {
      let tmp7;
      if (cResult[4] === tmp4) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const tmp9 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
    cResult[3] = fallback.fallback;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const merged = Object.assign(fallback);
  const tmp6 = <closure_11 ref={ref} />;
  cResult[0] = fallback;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
}) : ((fallback, ref) => {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={fallback.fallback}>{null}</RiveErrorBoundary>;
}));
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx");

export const CheckpointFriendsRive = forwardRefResult;