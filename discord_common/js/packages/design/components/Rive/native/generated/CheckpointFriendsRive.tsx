// discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { MAIN: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Sidekick: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Avatar: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, Username: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, "Friends 01 Rotation": { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" } };
let closure_8 = { MAIN: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Sidekick: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Avatar: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], Username: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], "Friends 01 Rotation": ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"] };
let closure_9 = {
  MAIN: function MAINBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let prop60 = require;
    const booleanBinding = require(3922) /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3922) /* BaseRive */;
    let twoFriends;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = require(3922) /* BaseRive */.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = require(3922) /* BaseRive */;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = prop60(3922).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const prop60Result = prop60(3922);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = prop60(3922).useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const prop60Result1 = prop60(3922);
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = prop60(3922).useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const prop60Result2 = prop60(3922);
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = prop60(3922).useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const prop60Result3 = prop60(3922);
    let prop6;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = prop60(3922).useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const prop60Result4 = prop60(3922);
    let prop8;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = prop60(3922).useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const prop60Result5 = prop60(3922);
    let prop10;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = prop60(3922).useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const prop60Result6 = prop60(3922);
    let prop12;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = prop60(3922).useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const prop60Result7 = prop60(3922);
    let prop14;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = prop60(3922).useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const prop60Result8 = prop60(3922);
    let prop16;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = prop60(3922).useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const prop60Result9 = prop60(3922);
    let prop18;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = prop60(3922).useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const prop60Result10 = prop60(3922);
    let prop20;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = prop60(3922).useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const prop60Result11 = prop60(3922);
    let prop22;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = prop60(3922).useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const prop60Result12 = prop60(3922);
    let prop24;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = prop60(3922).useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const prop60Result13 = prop60(3922);
    let prop26;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = prop60(3922).useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const prop60Result14 = prop60(3922);
    let prop28;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = prop60(3922).useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const prop60Result15 = prop60(3922);
    let prop30;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = prop60(3922).useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const prop60Result16 = prop60(3922);
    let prop32;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = prop60(3922).useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const prop60Result17 = prop60(3922);
    let prop34;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = prop60(3922).useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const prop60Result18 = prop60(3922);
    let prop36;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = prop60(3922).useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const prop60Result19 = prop60(3922);
    let prop38;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = prop60(3922).useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const prop60Result20 = prop60(3922);
    let prop40;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = prop60(3922).useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const prop60Result21 = prop60(3922);
    let prop42;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = prop60(3922).useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const prop60Result22 = prop60(3922);
    let prop44;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = prop60(3922).useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const prop60Result23 = prop60(3922);
    let prop46;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = prop60(3922).useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const prop60Result24 = prop60(3922);
    let prop48;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = prop60(3922).useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const prop60Result25 = prop60(3922);
    let prop50;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = prop60(3922).useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const prop60Result26 = prop60(3922);
    let prop52;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = prop60(3922).useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const prop60Result27 = prop60(3922);
    let prop54;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = prop60(3922).useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const prop60Result28 = prop60(3922);
    let prop56;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = prop60(3922).useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const prop60Result29 = prop60(3922);
    let prop58;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = prop60(3922).useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const prop60Result30 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    prop60 = prop60(3922).useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop60, playIfNeeded);
    const prop60Result31 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Stroke"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Stroke"];
    }
    prop60 = prop60(3922).useColorBinding("Avatar05/Stroke", instance, prop60, prop60, playIfNeeded);
    const prop60Result32 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Fill"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Fill"];
    }
    prop60 = prop60(3922).useColorBinding("Avatar05/Fill", instance, prop60, prop60, playIfNeeded);
    const prop60Result33 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Username"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Username"];
    }
    prop60 = prop60(3922).useStringBinding("Avatar05/Username", instance, prop60, prop60, playIfNeeded);
    const prop60Result34 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/img"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/img"];
    }
    prop60 = prop60(3922).useImageBinding("Avatar05/img", instance, prop60, prop60, playIfNeeded);
    const prop60Result35 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding.ConnectorColor;
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange.ConnectorColor;
    }
    prop60 = prop60(3922).useColorBinding("ConnectorColor", instance, prop60, prop60, playIfNeeded);
    return null;
  },
  Sidekick: function SidekickBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let prop60 = require;
    const booleanBinding = require(3922) /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3922) /* BaseRive */;
    let twoFriends;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = require(3922) /* BaseRive */.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = require(3922) /* BaseRive */;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = prop60(3922).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const prop60Result = prop60(3922);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = prop60(3922).useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const prop60Result1 = prop60(3922);
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = prop60(3922).useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const prop60Result2 = prop60(3922);
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = prop60(3922).useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const prop60Result3 = prop60(3922);
    let prop6;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = prop60(3922).useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const prop60Result4 = prop60(3922);
    let prop8;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = prop60(3922).useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const prop60Result5 = prop60(3922);
    let prop10;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = prop60(3922).useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const prop60Result6 = prop60(3922);
    let prop12;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = prop60(3922).useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const prop60Result7 = prop60(3922);
    let prop14;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = prop60(3922).useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const prop60Result8 = prop60(3922);
    let prop16;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = prop60(3922).useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const prop60Result9 = prop60(3922);
    let prop18;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = prop60(3922).useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const prop60Result10 = prop60(3922);
    let prop20;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = prop60(3922).useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const prop60Result11 = prop60(3922);
    let prop22;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = prop60(3922).useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const prop60Result12 = prop60(3922);
    let prop24;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = prop60(3922).useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const prop60Result13 = prop60(3922);
    let prop26;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = prop60(3922).useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const prop60Result14 = prop60(3922);
    let prop28;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = prop60(3922).useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const prop60Result15 = prop60(3922);
    let prop30;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = prop60(3922).useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const prop60Result16 = prop60(3922);
    let prop32;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = prop60(3922).useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const prop60Result17 = prop60(3922);
    let prop34;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = prop60(3922).useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const prop60Result18 = prop60(3922);
    let prop36;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = prop60(3922).useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const prop60Result19 = prop60(3922);
    let prop38;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = prop60(3922).useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const prop60Result20 = prop60(3922);
    let prop40;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = prop60(3922).useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const prop60Result21 = prop60(3922);
    let prop42;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = prop60(3922).useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const prop60Result22 = prop60(3922);
    let prop44;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = prop60(3922).useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const prop60Result23 = prop60(3922);
    let prop46;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = prop60(3922).useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const prop60Result24 = prop60(3922);
    let prop48;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = prop60(3922).useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const prop60Result25 = prop60(3922);
    let prop50;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = prop60(3922).useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const prop60Result26 = prop60(3922);
    let prop52;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = prop60(3922).useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const prop60Result27 = prop60(3922);
    let prop54;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = prop60(3922).useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const prop60Result28 = prop60(3922);
    let prop56;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = prop60(3922).useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const prop60Result29 = prop60(3922);
    let prop58;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = prop60(3922).useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const prop60Result30 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    prop60 = prop60(3922).useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop60, playIfNeeded);
    const prop60Result31 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Stroke"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Stroke"];
    }
    prop60 = prop60(3922).useColorBinding("Avatar05/Stroke", instance, prop60, prop60, playIfNeeded);
    const prop60Result32 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Fill"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Fill"];
    }
    prop60 = prop60(3922).useColorBinding("Avatar05/Fill", instance, prop60, prop60, playIfNeeded);
    const prop60Result33 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Username"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Username"];
    }
    prop60 = prop60(3922).useStringBinding("Avatar05/Username", instance, prop60, prop60, playIfNeeded);
    const prop60Result34 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/img"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/img"];
    }
    prop60 = prop60(3922).useImageBinding("Avatar05/img", instance, prop60, prop60, playIfNeeded);
    const prop60Result35 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding.ConnectorColor;
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange.ConnectorColor;
    }
    prop60 = prop60(3922).useColorBinding("ConnectorColor", instance, prop60, prop60, playIfNeeded);
    return null;
  },
  Avatar: function AvatarBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    if (dataBinding != null) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (onDataBindingChange != null) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = require(3922) /* BaseRive */.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    let tmpResult = tmp(3922);
    let StrokeVisibility;
    if (dataBinding != null) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (onDataBindingChange != null) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding1 = tmpResult.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    tmpResult = tmp(3922);
    let UsernameVisibility;
    if (dataBinding != null) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (onDataBindingChange != null) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding2 = tmpResult.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    const obj = require(3922) /* BaseRive */;
    let Stroke;
    if (dataBinding != null) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (onDataBindingChange != null) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = require(3922) /* BaseRive */.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    const tmpResult1 = require(3922) /* BaseRive */;
    let Fill;
    if (dataBinding != null) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (onDataBindingChange != null) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding1 = require(3922) /* BaseRive */.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
    const tmpResult2 = require(3922) /* BaseRive */;
    let Username;
    if (dataBinding != null) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (onDataBindingChange != null) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = require(3922) /* BaseRive */.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    const tmpResult3 = require(3922) /* BaseRive */;
    let img;
    if (dataBinding != null) {
      img = dataBinding.img;
    }
    let img1;
    if (onDataBindingChange != null) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = require(3922) /* BaseRive */.useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  },
  Username: function UsernameBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    if (dataBinding != null) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (onDataBindingChange != null) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = require(3922) /* BaseRive */.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    let tmpResult = tmp(3922);
    let StrokeVisibility;
    if (dataBinding != null) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (onDataBindingChange != null) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding1 = tmpResult.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    tmpResult = tmp(3922);
    let UsernameVisibility;
    if (dataBinding != null) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (onDataBindingChange != null) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding2 = tmpResult.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    const obj = require(3922) /* BaseRive */;
    let Stroke;
    if (dataBinding != null) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (onDataBindingChange != null) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = require(3922) /* BaseRive */.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    const tmpResult1 = require(3922) /* BaseRive */;
    let Fill;
    if (dataBinding != null) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (onDataBindingChange != null) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding1 = require(3922) /* BaseRive */.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
    const tmpResult2 = require(3922) /* BaseRive */;
    let Username;
    if (dataBinding != null) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (onDataBindingChange != null) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = require(3922) /* BaseRive */.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    const tmpResult3 = require(3922) /* BaseRive */;
    let img;
    if (dataBinding != null) {
      img = dataBinding.img;
    }
    let img1;
    if (onDataBindingChange != null) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = require(3922) /* BaseRive */.useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  },
  "Friends 01 Rotation": function Friends01RotationBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let prop60 = require;
    const booleanBinding = require(3922) /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3922) /* BaseRive */;
    let twoFriends;
    if (dataBinding != null) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (onDataBindingChange != null) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = require(3922) /* BaseRive */.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = require(3922) /* BaseRive */;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = prop60(3922).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const prop60Result = prop60(3922);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = prop60(3922).useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const prop60Result1 = prop60(3922);
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = prop60(3922).useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const prop60Result2 = prop60(3922);
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = prop60(3922).useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const prop60Result3 = prop60(3922);
    let prop6;
    if (dataBinding != null) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (onDataBindingChange != null) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = prop60(3922).useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const prop60Result4 = prop60(3922);
    let prop8;
    if (dataBinding != null) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (onDataBindingChange != null) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = prop60(3922).useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const prop60Result5 = prop60(3922);
    let prop10;
    if (dataBinding != null) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (onDataBindingChange != null) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = prop60(3922).useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const prop60Result6 = prop60(3922);
    let prop12;
    if (dataBinding != null) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (onDataBindingChange != null) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = prop60(3922).useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const prop60Result7 = prop60(3922);
    let prop14;
    if (dataBinding != null) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (onDataBindingChange != null) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = prop60(3922).useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const prop60Result8 = prop60(3922);
    let prop16;
    if (dataBinding != null) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (onDataBindingChange != null) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = prop60(3922).useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const prop60Result9 = prop60(3922);
    let prop18;
    if (dataBinding != null) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (onDataBindingChange != null) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = prop60(3922).useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const prop60Result10 = prop60(3922);
    let prop20;
    if (dataBinding != null) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (onDataBindingChange != null) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = prop60(3922).useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const prop60Result11 = prop60(3922);
    let prop22;
    if (dataBinding != null) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (onDataBindingChange != null) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = prop60(3922).useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const prop60Result12 = prop60(3922);
    let prop24;
    if (dataBinding != null) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (onDataBindingChange != null) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = prop60(3922).useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const prop60Result13 = prop60(3922);
    let prop26;
    if (dataBinding != null) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (onDataBindingChange != null) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = prop60(3922).useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const prop60Result14 = prop60(3922);
    let prop28;
    if (dataBinding != null) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (onDataBindingChange != null) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = prop60(3922).useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const prop60Result15 = prop60(3922);
    let prop30;
    if (dataBinding != null) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (onDataBindingChange != null) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = prop60(3922).useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const prop60Result16 = prop60(3922);
    let prop32;
    if (dataBinding != null) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (onDataBindingChange != null) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = prop60(3922).useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const prop60Result17 = prop60(3922);
    let prop34;
    if (dataBinding != null) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (onDataBindingChange != null) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = prop60(3922).useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const prop60Result18 = prop60(3922);
    let prop36;
    if (dataBinding != null) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (onDataBindingChange != null) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = prop60(3922).useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const prop60Result19 = prop60(3922);
    let prop38;
    if (dataBinding != null) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (onDataBindingChange != null) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = prop60(3922).useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const prop60Result20 = prop60(3922);
    let prop40;
    if (dataBinding != null) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (onDataBindingChange != null) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = prop60(3922).useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const prop60Result21 = prop60(3922);
    let prop42;
    if (dataBinding != null) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (onDataBindingChange != null) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = prop60(3922).useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const prop60Result22 = prop60(3922);
    let prop44;
    if (dataBinding != null) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (onDataBindingChange != null) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = prop60(3922).useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const prop60Result23 = prop60(3922);
    let prop46;
    if (dataBinding != null) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (onDataBindingChange != null) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = prop60(3922).useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const prop60Result24 = prop60(3922);
    let prop48;
    if (dataBinding != null) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (onDataBindingChange != null) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = prop60(3922).useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const prop60Result25 = prop60(3922);
    let prop50;
    if (dataBinding != null) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (onDataBindingChange != null) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = prop60(3922).useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const prop60Result26 = prop60(3922);
    let prop52;
    if (dataBinding != null) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (onDataBindingChange != null) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = prop60(3922).useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const prop60Result27 = prop60(3922);
    let prop54;
    if (dataBinding != null) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (onDataBindingChange != null) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = prop60(3922).useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const prop60Result28 = prop60(3922);
    let prop56;
    if (dataBinding != null) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (onDataBindingChange != null) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = prop60(3922).useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const prop60Result29 = prop60(3922);
    let prop58;
    if (dataBinding != null) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (onDataBindingChange != null) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = prop60(3922).useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const prop60Result30 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    prop60 = prop60(3922).useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop60, playIfNeeded);
    const prop60Result31 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Stroke"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Stroke"];
    }
    prop60 = prop60(3922).useColorBinding("Avatar05/Stroke", instance, prop60, prop60, playIfNeeded);
    const prop60Result32 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Fill"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Fill"];
    }
    prop60 = prop60(3922).useColorBinding("Avatar05/Fill", instance, prop60, prop60, playIfNeeded);
    const prop60Result33 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/Username"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/Username"];
    }
    prop60 = prop60(3922).useStringBinding("Avatar05/Username", instance, prop60, prop60, playIfNeeded);
    const prop60Result34 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding["Avatar05/img"];
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange["Avatar05/img"];
    }
    prop60 = prop60(3922).useImageBinding("Avatar05/img", instance, prop60, prop60, playIfNeeded);
    const prop60Result35 = prop60(3922);
    prop60 = undefined;
    if (dataBinding != null) {
      prop60 = dataBinding.ConnectorColor;
    }
    prop60 = undefined;
    if (onDataBindingChange != null) {
      prop60 = onDataBindingChange.ConnectorColor;
    }
    prop60 = prop60(3922).useColorBinding("ConnectorColor", instance, prop60, prop60, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointFriendsRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
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
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != outer1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = outer1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  let obj = { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null };
  obj[1] = dataBinding(onDataBindingChange[4]);
  obj[2] = str;
  obj[3] = closure_7;
  obj[4] = closure_8;
  obj[5] = str2;
  obj[6] = defaultViewModelInstance.stateMachine;
  obj[7] = callback;
  let merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null });
});
const forwardRefResult = importAllResult.forwardRef(function CheckpointFriendsRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(require(3973) /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx");

export const CheckpointFriendsRive = forwardRefResult;