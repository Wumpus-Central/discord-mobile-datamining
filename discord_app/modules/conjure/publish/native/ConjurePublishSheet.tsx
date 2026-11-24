// === Module 18296: ConjurePublishSheet ===

// Module 18296 (ConjurePublishSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import GuildIcon from "GuildIcon" /* 6926 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11313 */;
import showConjurePublishSheet from "showConjurePublishSheet" /* 18295 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

const GuildIconDefault = GuildIcon;

require = fn;
function hidePublishSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(showConjurePublishSheet.CONJURE_PUBLISH_SHEET_KEY);
}
function PublishSheetBody(project) {
  project = project.project;
  const publish = project.publish;
  let entryPoint = project.entryPoint;
  closure_3 = undefined;
  noop = undefined;
  let current;
  closure_6 = undefined;
  function saveEdits() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_8 = async function _saveEdits() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (ref.current) {
            c4 = 3;
            return { value: false, done: true };
          } else {
            ref.current = true;
            c3 = 2;
            v3 = 3;
            c4 = 1;
            const obj5 = { value: asyncGeneratorStep.save(), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_4.current = false;
          throw tmp27;
        } else if (2 === tmp8) {
          c3 = 1;
          const obj6 = { text: null, variant: "critical" };
          const intl = tmp4(tmp27[16]).intl;
          obj6.text = intl.string(v3(tmp27[17]).Fi7boI);
          v3(tmp27[15]).open("CONJURE_PUBLISH_SHEET_ERROR", obj6);
          c3 = 0;
          closure_128_4.current = false;
          c4 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_4.current = false;
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c3 = 0;
          closure_128_4.current = false;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp27) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp27;
        } else if (tmp2 === tmp29) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  closure_9 = async function _handleConjureIcon() {
    if (entryPoint === 2) {
      entryPoint = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        entryPoint = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            entryPoint = 3;
            throw value;
          } else if (arg0 === 2) {
            entryPoint = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            v1 = 1;
            entryPoint = 1;
            const obj4 = { value: saveEdits(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          entryPoint = 3;
          throw value;
        } else if (arg0 === 2) {
          entryPoint = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            hidePublishSheet();
            v1(entryPoint[18])(closure_128_0.id);
          }
          entryPoint = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        entryPoint = tmp;
        throw tmp14;
      }
    }
  };
  closure_10 = async function _handlePublish() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: saveEdits(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          current = value;
          if (value) {
            current = closure_128_6.current;
          }
          if (current) {
            hidePublishSheet();
            const appChannelsPrivate = closure_128_3.appChannelsPrivate;
            let isPrivate;
            if (appChannelsPrivate != null) {
              isPrivate = appChannelsPrivate.isPrivate;
            }
            closure_128_1.run(closure_128_2, true === isPrivate);
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c2 = tmp;
        throw tmp18;
      }
    }
  };
  const tmp3 = publish(entryPoint[11])();
  const height = tmp3.height;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== height) {
    num = height;
  }
  const tmp4Result = closure_9(num);
  const tmp6 = publish(entryPoint[12])(project, publish.guildId);
  closure_3 = tmp6;
  publish(entryPoint[13])(() => true, tmp6.saving);
  noop = noop.useRef(false);
  const context = noop.useContext(tmp(tmp2[14]));
  let transitionState;
  if (context != null) {
    transitionState = context.transitionState;
  }
  let tmp10 = null == transitionState;
  if (!tmp10) {
    tmp10 = "visible" === transitionState;
  }
  current = tmp10;
  closure_6 = obj.useRef(tmp10);
  items = [tmp10];
  const layoutEffect = obj.useLayoutEffect(() => {
    closure_6.current = current;
    return () => {
      closure_1_6.current = false;
    };
  }, items);
  let intl = project(tmp2[16]).intl;
  if ("adds_surfaces" === tmp6.reason) {
    let NEPcoi = tmp(tmp2[17]).wnZ4yU;
  } else {
    NEPcoi = tmp(tmp2[17]).NEPcoi;
  }
  let obj2 = { startExpanded: tmp6.editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl.string(NEPcoi), footer: null, children: null };
  let obj3 = { style: tmp4Result.footer, ref, onLayout, children: null };
  let obj4 = { bottom: true, style: tmp4Result.footerBody, children: null };
  let tmp14Result = null;
  if (null != tmp6.destination) {
    let obj5 = { destination: tmp6.destination };
    tmp14Result = tmp14(PublishDestination, obj5);
  }
  const items1 = [tmp14Result, ];
  let obj6 = { variant: "primary", size: "md", text: publish.label, disabled: null, loading: null, onPress: null };
  let disabled = publish.disabled;
  if (!disabled) {
    disabled = null != tmp6.nameError;
  }
  obj6.disabled = disabled;
  obj6.loading = tmp6.saving;
  obj6.onPress = function handlePublish() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items1[1] = saveEdits(project(entryPoint[21]).Button, obj6);
  obj4.children = items1;
  obj3.children = closure_8(project(entryPoint[20]).SafeAreaPaddingView, obj4);
  obj2.footer = saveEdits(current, obj3);
  let obj7 = {
    style: tmp4Result.content,
    children: saveEdits(publish(entryPoint[22]), {
      review: tmp6,
      onConjureIcon: function handleConjureIcon() {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
    })
  };
  obj2.children = saveEdits(current, obj7);
  return saveEdits(project(entryPoint[19]).ActionSheet, obj2);
}
function PublishDestination(destination) {
  destination = destination.destination;
  const tmp = closure_10();
  if ("server" === destination.type) {
    let name = destination.guild.name;
  } else {
    const intl = util.intl;
    name = intl.string(_modDef4192["11Xr/r"]);
  }
  const obj = { style: tmp.destination, accessible: true, children: null };
  if ("server" === destination.type) {
    const obj2 = { guild: destination.guild, size: GuildIcon.GuildIconSizes.NORMAL };
    let tmp11 = metroImportDefault(GuildIconDefault, obj2);
    let tmp8 = require;
    let tmp10 = metroImportDefault;
  } else {
    tmp8 = require;
    const obj3 = { user: destination.user, guildId: "Array", size: native.AvatarSizes.NORMAL, accessible: true };
    tmp10 = metroImportDefault;
    tmp11 = metroImportDefault(native.Avatar, obj3);
  }
  items = [tmp11, ];
  const obj4 = { style: tmp.destinationText, children: null };
  const obj5 = { variant: "body-xs/normal", color: "text-subtle", children: null };
  const intl2 = tmp8(1112).intl;
  obj5.children = intl2.string(_modDef4192.XHjO6t);
  const items1 = [tmp10(tmp8(5508).Text, obj5), tmp10(tmp8(5508).Text, { variant: "body-md/medium", color: "text-strong", lineClamp: 1, children: name })];
  obj4.children = items1;
  items[1] = React5(View, obj4);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4917);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { content: { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 }, footer: null, footerBody: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 };
  obj.footer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.footerBody = { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
  return obj;
});
createStyles = fn(4917);
let obj3 = { destination: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, destinationText: null };
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj3.destinationText = { flexShrink: 1, gap: nativeDefault.space.PX_4 / 2 };
let closure_10 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function ConjurePublishSheet(projectId) {
  projectId = projectId.projectId;
  ({ publishOptions, entryPoint } = projectId);
  const tmp = useConjurePublishActionDefault(projectId, publishOptions);
  items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  importDefault = tmp3;
  const items2 = [null == tmp || null == stateFromStores];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      ActionSheetActionCreatorsDefault.hideActionSheet(showConjurePublishSheet.CONJURE_PUBLISH_SHEET_KEY);
    }
  }, items2);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (null != stateFromStores) {
      const obj2 = { project: stateFromStores, publish: tmp, entryPoint };
      tmp5 = closure_7(PublishSheetBody, obj2);
    }
  }
  return tmp5;
};