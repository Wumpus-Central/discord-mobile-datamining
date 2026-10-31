// discord_app/modules/conjure/projects/native/ConjureProjectIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ConjureAppIconTileDefault from "ConjureAppIconTile.tsx";
import useConjureProjectIcon from "../useConjureProjectIcon.tsx";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const useConjureProjectIconDefault = useConjureProjectIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const dependencyMap = { header: 20, list: 32, card: 40, dialog: 48 };
let createStyles = fn(5014);
let closure_8 = createStyles.createStyles((width, borderRadius, width2) => {
  const obj = {
    frame: { width, height: width, borderRadius, overflow: "hidden", alignItems: "center", justifyContent: "center" },
    image: { width, height: width },
    border: null,
    glyph: null,
  };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.borderRadius = borderRadius;
  obj2.borderWidth = 1;
  obj2.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj.border = obj2;
  obj.glyph = { width: width2, height: width2 };
  return obj;
});
createStyles = fn(5014);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { tile: { backgroundColor } };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectIcon.tsx");

export default function ConjureProjectIcon(project) {
  project = project.project;
  const tmp4 = useConjureProjectIconDefault(project, dependencyMap[project.size]);
  const url = tmp4.url;
  const tmp5 = closure_8(dependencyMap[project.size], tmp4.radius, tmp4.glyphSize);
  const obj = {
    style: tmp5.frame,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  if (null != url) {
    const obj3 = { source: null, style: null };
    const tmp2Result = FastImageDefault;
    obj3.source = AvatarUtils.makeSource(url);
    obj3.style = tmp5.image;
    let tmp10 = hasOwnProperty(tmp2Result, obj3);
    let tmp9 = hasOwnProperty;
  } else {
    const obj5 = { applicationId: null, name: null, size: null };
    ({ application_id: obj2.applicationId, name: obj2.name } = project);
    obj5.size = tmp;
    tmp9 = hasOwnProperty;
    tmp10 = hasOwnProperty(ConjureAppIconTileDefault, obj5);
  }
  const items = [tmp10, tmp9(React4, { style: tmp5.border, pointerEvents: "none" })];
  obj.children = items;
  return timestampProducer(React4, obj);
}
export function ConjureNewProjectIcon(arg0) {
  const result = useConjureProjectIcon.conjureProjectIconMetrics(tmp);
  const tmp3 = closure_8(dependencyMap[arg0.size], result.radius, result.glyphSize);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const obj3 = _modDef671(token);
  const obj4 = { style: null, children: null };
  const items = [tmp3.frame, closure_9(_modDef671(token).alpha(0.24).css()).tile];
  obj4.style = items;
  const alphaResult = _modDef671(token).alpha(0.24);
  obj4.children = hasOwnProperty(MagicWandIcon.MagicWandIcon, {
    size: "custom",
    style: tmp3.glyph,
    color: nativeDefault.colors.ICON_BRAND,
  });
  return hasOwnProperty(React4, obj4);
}
