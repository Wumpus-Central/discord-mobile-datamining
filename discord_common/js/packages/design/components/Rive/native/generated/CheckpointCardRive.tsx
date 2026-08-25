// === Module 4176: CheckpointCardRive ===

// Module 4176 (CheckpointCardRive)
import BaseRive from "BaseRive" /* 4114 */;
import getDerivedStateFromError from "getDerivedStateFromError" /* 4169 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
let closure_8 = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let closure_9 = {
  Main: function MainBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cassette: function CassetteBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cat: function CatBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Banana: function BananaBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Duck: function DuckBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Snail: function SnailBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Origami: function OrigamiBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Disco: function DiscoBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Capybara: function CapybaraBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Donut: function DonutBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Bonsai: function BonsaiBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  "Card Back": function CardBackBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Knickknack: function KnickknackBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Card: function CardBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let tmpResult = tmp(4114);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = tmpResult.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    tmpResult = tmp(4114);
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = tmpResult.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj2 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult1 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult2 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult3 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointCardRiveInner(defaultViewModelInstance, ref) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Main";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Bonsai";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = closure_1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  const tmp = callback(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function CheckpointCardRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = forwardRefResult;