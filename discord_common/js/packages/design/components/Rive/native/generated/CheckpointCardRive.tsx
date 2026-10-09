// === Module 4867: CheckpointCardRive ===

// Module 4867 (CheckpointCardRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 4805 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4858 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
const artboardViewModelInstances = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let ReactCompilerGating = fn(558);
let obj2 = {
  Main: ReactCompilerGating.isReactCompilerEnabled() ? (function MainBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const tmpResult = BaseRive;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const tmpResult8 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult9 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult10 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult11 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult12 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult13 = BaseRive;
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
  }) : (function MainBindings(reducedMotionEnabled) {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const tmpResult = BaseRive;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const tmpResult8 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult9 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult10 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult11 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult12 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult13 = BaseRive;
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
  }),
  Cassette: null,
  Cat: null,
  Banana: null,
  Duck: null,
  Snail: null,
  Origami: null,
  Disco: null,
  Capybara: null,
  Donut: null,
  Bonsai: null,
  "Card Back": null,
  Knickknack: null,
  Card: null
};
ReactCompilerGating = fn(558);
obj2.Cassette = ReactCompilerGating.isReactCompilerEnabled() ? (function CassetteBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function CassetteBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Cat = ReactCompilerGating.isReactCompilerEnabled() ? (function CatBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function CatBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Banana = ReactCompilerGating.isReactCompilerEnabled() ? (function BananaBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function BananaBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Duck = ReactCompilerGating.isReactCompilerEnabled() ? (function DuckBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function DuckBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Snail = ReactCompilerGating.isReactCompilerEnabled() ? (function SnailBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function SnailBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Origami = ReactCompilerGating.isReactCompilerEnabled() ? (function OrigamiBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function OrigamiBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Disco = ReactCompilerGating.isReactCompilerEnabled() ? (function DiscoBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function DiscoBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Capybara = ReactCompilerGating.isReactCompilerEnabled() ? (function CapybaraBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function CapybaraBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Donut = ReactCompilerGating.isReactCompilerEnabled() ? (function DonutBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function DonutBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Bonsai = ReactCompilerGating.isReactCompilerEnabled() ? (function BonsaiBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function BonsaiBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2["Card Back"] = ReactCompilerGating.isReactCompilerEnabled() ? (function CardBackBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function CardBackBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Knickknack = ReactCompilerGating.isReactCompilerEnabled() ? (function KnickknackBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function KnickknackBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
obj2.Card = ReactCompilerGating.isReactCompilerEnabled() ? (function CardBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
}) : (function CardBindings(reducedMotionEnabled) {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
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
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCardRiveInner(arg0) {
  const cResult = require("c").c(19);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    class F {
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
  str = "Main";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Bonsai";
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
      obj2 = { ref: tmp6, src: require("module_4868"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: null, renderDataBinding: null };
      class F {
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
      obj2.renderDataBinding = tmp14;
      let merged = Object.assign(tmp7);
      const tmp23 = jsx(tmp(tmp2[4]).BaseRive, { ref: tmp6, src: require("module_4868"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: null, renderDataBinding: null });
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
  class F {
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
  cResult[8] = str;
  cResult[9] = dataBinding;
  cResult[10] = onDataBindingChange;
  cResult[11] = F;
  tmp14 = F;
  let obj = require("c");
  tmp = _require;
}) : (function CheckpointCardRiveInner(defaultViewModelInstance) {
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
  dataBinding = defaultViewModelInstance.dataBinding;
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
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCardRiveWithBoundary(fallback) {
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
}) : (function CheckpointCardRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_11 />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
});