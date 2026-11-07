// discord_app/modules/conjure/server_share/native/showConjureShareToServerSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
function ShareToServerSheet(projectId) {
  projectId = projectId.projectId;
  importDefault = undefined;
  guild = undefined;
  sharing = undefined;
  noop = undefined;
  closure_5 = async function _confirm() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            dependencyMap = tmp5;
            closure_129_0 = undefined;
            c3 = 1;
            c4 = 1;
            const obj6 = { value: importDefault.share(), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_129_0 = value;
              let shared = closure_129_0.shared;
              if (shared) {
                shared = !closure_130_4.current;
              }
              if (shared) {
                tmp2(5374).hideActionSheet(ConjureShareToServerSheet);
                if (closure_129_0.testAppReady) {
                  c3 = 2;
                  c4 = 1;
                  const obj8 = { value: closure_130_1.publish(), done: false };
                  return obj8;
                } else {
                  const intl = server(1113).intl;
                  let name;
                  if (closure_130_2 != null) {
                    name = closure_130_2.name;
                  }
                  server = name;
                  if (name == null) {
                    server = "";
                  }
                  const obj9 = { text: null, variant: "success" };
                  const obj10 = { server };
                  obj9.text = intl.formatToPlainString(tmp2(4026).o2xHEb, obj10);
                  tmp2(5837).open(ConjureShareToServerSheet, obj9);
                  const obj3 = tmp2(5837);
                }
                const obj2 = tmp2(5374);
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp29) {
        c4 = tmp;
        throw tmp29;
      }
    }
  };
  ({ guildId, publishOptions } = projectId);
  const tmp = closure_10();
  items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = projectId(guild[7]).useStateFromStores(
    items,
    () => {
      const project = ConjureProjectStore.getProject(projectId);
      let str;
      if (project != null) {
        str = project.name;
      }
      if (str == null) {
        str = "";
      }
      return str;
    },
    items1,
  );
  const tmp6 = require("useConjureShareToServer")(projectId, guildId, publishOptions);
  importDefault = tmp6;
  ({ guilds, guild } = tmp6);
  ({ blockedReason, sharing } = tmp6);
  const error = tmp6.error;
  let intl = projectId(guild[9]).intl;
  let obj = projectId(guild[7]);
  noop = noop.useRef(false);
  const effect = noop.useEffect(() => {
    closure_4.current = false;
    return () => {
      closure_1_4.current = true;
    };
  }, []);
  let obj2 = {
    header: closure_7(projectId(guild[14]).BottomSheetTitleHeader, {
      title: intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").N3Ryqz, {
        app: stateFromStores,
      }),
    }),
    children: null,
  };
  let obj3 = { style: tmp.content, children: null };
  let tmp9Result = null;
  if (null != guild) {
    tmp9Result = null;
    if (guilds.length > 1) {
      let obj4 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
      const intl2 = tmp2(tmp3[9]).intl;
      obj4.title = intl2.string(tmp5(tmp3[10]).Uq5hU9);
      obj4.value = guild.id;
      obj4.onChange = tmp6.pickGuild;
      obj4.children = guilds.map((id) =>
        metroImportDefault(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, disabled: sharing }, id.id),
      );
      tmp9Result = closure_7(tmp2(tmp3[15]).TableRadioGroup, obj4);
    }
  }
  const items2 = [tmp9Result, , , , ,];
  let obj5 = { spacing: 8, children: null };
  let obj6 = { variant: "body-md/semibold", color: "text-strong", children: null };
  const intl3 = tmp2(tmp3[9]).intl;
  obj6.children = intl3.string(require("../../intl/ConjureUntranslated.messages.js")["kG/2e8"]);
  const items3 = [closure_7(projectId(guild[18]).Text, obj6)];
  let obj7 = { style: tmp.box, children: null };
  let obj8 = { spacing: 8, children: null };
  let obj9 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items4 = [closure_7(projectId(guild[19]).RobotIcon, { size: "sm", color: "text-subtle" })];
  let obj10 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.rowText, children: null };
  const intl4 = tmp2(tmp3[9]).intl;
  obj10.children = intl4.string(require("../../intl/ConjureUntranslated.messages.js").eSpjGV);
  items4[1] = closure_7(projectId(guild[18]).Text, obj10);
  obj9.children = items4;
  const items5 = [closure_8(projectId(guild[17]).Stack, obj9), ,];
  const obj11 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items6 = [closure_7(projectId(guild[20]).BeakerIcon, { size: "sm", color: "text-subtle" })];
  const obj12 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.rowText, children: null };
  const intl5 = tmp2(tmp3[9]).intl;
  obj12.children = intl5.string(require("../../intl/ConjureUntranslated.messages.js")["+5f47F"]);
  items6[1] = closure_7(projectId(guild[18]).Text, obj12);
  obj11.children = items6;
  items5[1] = closure_8(projectId(guild[17]).Stack, obj11);
  const obj13 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items7 = [closure_7(projectId(guild[21]).GroupIcon, { size: "sm", color: "text-subtle" })];
  const obj14 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.rowText, children: null };
  const intl6 = tmp2(tmp3[9]).intl;
  obj14.children = intl6.string(require("../../intl/ConjureUntranslated.messages.js")["s3/5nF"]);
  items7[1] = closure_7(projectId(guild[18]).Text, obj14);
  obj13.children = items7;
  items5[2] = closure_8(projectId(guild[17]).Stack, obj13);
  obj8.children = items5;
  obj7.children = closure_8(projectId(guild[17]).Stack, obj8);
  items3[1] = closure_7(closure_5, obj7);
  obj5.children = items3;
  items2[1] = closure_8(projectId(guild[17]).Stack, obj5);
  const obj15 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl7 = tmp2(tmp3[9]).intl;
  obj15.children = intl7.string(require("../../intl/ConjureUntranslated.messages.js")["6y2j3H"]);
  items2[2] = closure_7(projectId(guild[18]).Text, obj15);
  if (null != error) {
    const obj16 = {
      variant: "body-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    let tmp9Result2 = closure_7(tmp2(tmp3[18]).Text, obj16);
  } else {
    tmp9Result2 = null;
    if (null != blockedReason) {
      const obj17 = { variant: "body-sm/medium", color: "text-feedback-warning", children: blockedReason };
      tmp9Result2 = closure_7(tmp2(tmp3[18]).Text, obj17);
    }
  }
  items2[3] = tmp9Result2;
  const obj18 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const intl8 = tmp2(tmp3[9]).intl;
  obj18.text = intl8.string(require("../../intl/ConjureUntranslated.messages.js")["+ysSG7"]);
  obj18.loading = sharing;
  obj18.disabled = null == guild || null != blockedReason;
  obj18.onPress = function confirm() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items2[4] = closure_7(projectId(guild[22]).Button, obj18);
  const obj19 = { variant: "secondary", text: null, disabled: null, onPress: null };
  const intl9 = tmp2(tmp3[9]).intl;
  obj19.text = intl9.string(projectId(guild[9]).t["ETE/oC"]);
  obj19.disabled = sharing;
  obj19.onPress = function onPress() {
    return closure_1(guild[11]).hideActionSheet(ConjureShareToServerSheet);
  };
  items2[5] = closure_7(projectId(guild[22]).Button, obj19);
  obj3.children = items2;
  obj2.children = closure_8(closure_5, obj3);
  return closure_7(projectId(guild[13]).ActionSheet, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const ConjureShareToServerSheet = "ConjureShareToServerSheet";
const createStyles = fn(5140);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, box: null, rowText: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.box = {
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.rowText = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureShareToServerSheet.tsx");

export default function showConjureShareToServerSheet(arg0) {
  const obj2 = { key: ConjureShareToServerSheet, content: null };
  const merged = Object.assign(arg0);
  obj2.content = metroImportDefault(ShareToServerSheet, {});
  ActionSheetActionCreators.showActionSheet(obj2);
}
