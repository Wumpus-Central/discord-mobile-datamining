// === Module 4674: CheckpointCardRive ===

// Module 4674 (CheckpointCardRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 4612 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4665 */;
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
const artboardProperties = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
const artboardViewModelInstances = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  Main: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Cassette: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Cat: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Banana: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Duck: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Snail: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Origami: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Disco: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Capybara: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Donut: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Bonsai: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  "Card Back": ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Knickknack: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Card: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
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
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
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
    class V {
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
  str = "Main";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  let str2 = "Bonsai";
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
      class V {
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
      const tmp23 = <BaseRive ref={ref} src={require("module_4675")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={null} stateMachine={tmp7} renderDataBinding={tmp13} />;
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
  class V {
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
  cResult[10] = V;
  tmp13 = V;
}) : ((defaultViewModelInstance, ref) => {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Main";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Bonsai";
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
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = forwardRefResult;