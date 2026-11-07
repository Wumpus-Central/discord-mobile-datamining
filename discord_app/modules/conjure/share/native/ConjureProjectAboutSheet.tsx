// === Module 12998: ConjureProjectAboutSheet ===

// Module 12998 (ConjureProjectAboutSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import UserUtils from "UserUtils" /* 5194 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import Text_Text from "Text/Text" /* 5751 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9069 */;
import openConjureProjectAboutSheet from "openConjureProjectAboutSheet" /* 12997 */;
import useConjureSharedProjectDefault from "useConjureSharedProject" /* 12999 */;
import useConjureSharedProjectCoverActionDefault from "useConjureSharedProjectCoverAction" /* 13000 */;
import ConjureSharedProjectCoverDefault from "ConjureSharedProjectCover" /* 13004 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 13005 */;
import conjureSharedProjectSurfaces from "conjureSharedProjectSurfaces" /* 13006 */;
import useConjureProjectCreator from "useConjureProjectCreator" /* 13007 */;
import openConjureSharedProjectRemixSheetDefault from "openConjureSharedProjectRemixSheet" /* 13009 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function Surfaces(project) {
  let supported_surfaces = project.project.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  const result = conjureSharedProjectSurfaces.conjureSharedProjectSurfaceLabels(supported_surfaces);
  let tmp3 = null;
  if (0 !== result.length) {
    const obj2 = { spacing: nativeDefault.space.PX_4, children: null };
    const obj3 = { variant: "body-xs/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef4026["cF++B3"]);
    items = [timestampProducer(Text_Text.Text, obj3), ];
    const obj4 = { variant: "body-sm/normal", color: "text-default", children: result.join(" \u00B7 ") };
    items[1] = timestampProducer(Text_Text.Text, obj4);
    obj2.children = items;
    tmp3 = metroImportDefault(Stack_Stack.Stack, obj2);
  }
  return tmp3;
}
function Creator(project) {
  const creator = useConjureProjectCreator.useConjureProjectPeople(project.project).creator;
  let tmp3 = null;
  if (null != creator) {
    const obj2 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 1, children: null };
    const intl = util.intl;
    const obj3 = { name: UserUtils.getName(creator) };
    obj2.children = intl.formatToPlainString(_modDef4026["6/x9LD"], obj3);
    tmp3 = timestampProducer(Text_Text.Text, obj2);
    const tmpResult = UserUtils;
  }
  return tmp3;
}
function RemixActions(project) {
  project = project.project;
  const guildId = project.guildId;
  const ticket = project.ticket;
  items = [guildId, project, ticket];
  closure_3 = noop.useCallback((arg0) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openConjureProjectAboutSheet.CONJURE_PROJECT_ABOUT_SHEET_KEY);
    openConjureSharedProjectRemixSheetDefault(project, guildId, arg0, ticket);
  }, items);
  const obj = { direction: "horizontal", spacing: guildId(ticket[5]).space.PX_8, children: null };
  const obj2 = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
  const intl = project(ticket[12]).intl;
  obj2.text = intl.string(guildId(ticket[13])["6RGR3m"]);
  obj2.onPress = function onPress() {
    return closure_3("remix");
  };
  const items1 = [closure_6(project(ticket[26]).Button, obj2), ];
  const obj3 = { grow: true, variant: "primary", size: "md", text: null, onPress: null };
  const intl2 = project(ticket[12]).intl;
  obj3.text = intl2.string(guildId(ticket[13])["UsUa/c"]);
  obj3.onPress = function onPress() {
    return closure_3("copy");
  };
  items1[1] = closure_6(project(ticket[26]).Button, obj3);
  obj.children = items1;
  return closure_7(project(ticket[22]).Stack, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5140);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, body: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 }, identity: null, details: null, footer: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 };
  obj.identity = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
  const obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
  obj.details = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
  const obj4 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
  obj.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/native/ConjureProjectAboutSheet.tsx");

export default function ConjureProjectAboutSheet(arg0) {
  ({ applicationId, source, ticket } = arg0);
  if (ticket === undefined) {
    ticket = null;
  }
  let run;
  const tmp3 = useConjureSharedProjectDefault(applicationId, ticket);
  const tmp4 = useMeasuredLayoutDefault();
  const height = tmp4.height;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== height) {
    num = height;
  }
  const tmp5Result = closure_9(num);
  let project = null;
  if ("ready" === tmp3.type) {
    project = null;
    if (tmp3.canRemix) {
      project = tmp3.project;
    }
  }
  let tmp9 = null;
  if (obj.useIsConjureMobileEnabled(null != project, "ConjureProjectAboutSheet")) {
    tmp9 = project;
  }
  if ("ready" === tmp3.type) {
    let application = tmp3.application;
  } else {
    application = null;
  }
  let project1 = null;
  if ("ready" === tmp3.type) {
    project1 = tmp3.project;
  }
  const tmp12 = useConjureSharedProjectCoverActionDefault(applicationId, project1, source);
  run = tmp12.run;
  ({ type, launching, launchFailed } = tmp12);
  items = [run];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            v1 = 1;
            dependencyMap = 1;
            const obj4 = { value: run(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            v1(5374).hideActionSheet(tmp4(12997).CONJURE_PROJECT_ABOUT_SHEET_KEY);
            const obj = v1(5374);
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp11) {
        dependencyMap = tmp;
        throw tmp11;
      }
    }
  }), items);
  if (null != application) {
    let name = application.name;
  } else if ("loading" === tmp3.type) {
    const intl2 = tmp8(1113).intl;
    name = intl2.string(tmp8(1113).t.ZTNur7);
  } else {
    const intl = tmp8(1113).intl;
    if ("expired" === tmp3.type) {
      let mQma36 = _modDef4026.wahvH2;
    } else {
      mQma36 = _modDef4026.mQma36;
    }
    name = intl.string(mQma36);
  }
  let obj2 = { scrollable: true, header: closure_6(run(7382).BottomSheetTitleHeader, { title: name }), footer: null, children: null };
  let tmp14Result;
  if (null != tmp9) {
    let obj3 = { style: tmp5Result.footer, ref, onLayout, children: null };
    let obj4 = { bottom: true, children: null };
    let obj5 = { project: tmp9, guildId: source.guildId, ticket };
    obj4.children = closure_6(RemixActions, obj5);
    obj3.children = closure_6(tmp8(7355).SafeAreaPaddingView, obj4);
    tmp14Result = closure_6(View, obj3);
  }
  obj2.footer = tmp14Result;
  const obj6 = { style: tmp5Result.scroll, contentContainerStyle: tmp5Result.body, children: null };
  let tmp18Result = null;
  if (null != application) {
    const obj7 = { application, action: type, launching, onPress: callback };
    const items1 = [closure_6(ConjureSharedProjectCoverDefault, obj7), , ];
    let tmp14Result4 = null;
    if (launchFailed) {
      const obj8 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
      const intl3 = tmp8(1113).intl;
      obj8.children = intl3.string(_modDef4026.hh2nuX);
      tmp14Result4 = closure_6(tmp8(5751).Text, obj8);
    }
    items1[1] = tmp14Result4;
    const obj9 = { style: tmp5Result.identity, children: null };
    const obj10 = { application, radius: nativeDefault.radii.sm };
    const items2 = [closure_6(ConjureAppSheetIconDefault, obj10), ];
    const obj11 = { style: tmp5Result.details, children: null };
    const obj12 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: application.name };
    const items3 = [closure_6(tmp8(5751).Text, obj12), ];
    let tmp14Result5 = null;
    if (null != application.description) {
      tmp14Result5 = null;
      if ("" !== str3.trim()) {
        const obj13 = { variant: "body-sm/normal", color: "text-default", children: application.description.trim() };
        tmp14Result5 = closure_6(tmp8(5751).Text, obj13);
      }
      str3 = application.description;
    }
    const obj14 = { children: null };
    items3[1] = tmp14Result5;
    obj11.children = items3;
    items2[1] = closure_7(View, obj11);
    obj9.children = items2;
    items1[2] = closure_7(View, obj9);
    obj14.children = items1;
    tmp18Result = closure_7(closure_8, obj14);
    const tmpResult = ConjureAppSheetIconDefault;
  }
  const items4 = [tmp18Result, , ];
  let tmp18Result2 = null;
  if ("ready" === tmp3.type) {
    const obj15 = { children: null };
    const obj16 = { project: tmp3.project };
    const items5 = [closure_6(Surfaces, obj16), ];
    const obj17 = { project: tmp3.project };
    items5[1] = closure_6(Creator, obj17);
    obj15.children = items5;
    tmp18Result2 = closure_7(closure_8, obj15);
  }
  items4[1] = tmp18Result2;
  let tmp14Result6 = null;
  if ("info_only" === tmp3.type) {
    const obj18 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp8(1113).intl;
    obj18.children = intl4.string(_modDef4026["2DSRxV"]);
    tmp14Result6 = closure_6(tmp8(5751).Text, obj18);
  }
  items4[2] = tmp14Result6;
  obj6.children = items4;
  obj2.children = closure_7(run(5392).BottomSheetScrollView, obj6);
  return closure_6(run(7426).ActionSheet, obj2);
};