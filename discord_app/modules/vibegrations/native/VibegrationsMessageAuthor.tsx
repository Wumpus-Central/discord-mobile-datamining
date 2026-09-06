// === Module 16604: VibegrationsMessageAuthor ===

// Module 16604 (VibegrationsMessageAuthor)
import nativeDefault from "native" /* 576 */;
import vibegrationsMessageAuthors from "vibegrationsMessageAuthors" /* 16605 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { author: null };
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.author = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export default function VibegrationsMessageAuthor(userId) {
  userId = userId.userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(userId), items);
  let obj = userId(504);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    let user = null;
    if (null != userId) {
      user = UserStore.getUser(userId);
    }
    return vibegrationsMessageAuthors.resolveMessageAuthor(userId, user, UserStore.getCurrentUser());
  }, items2);
  userId(4404);
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.author, children: null };
    obj = { size: tmp3(1178).AvatarSizes.SIZE_16, user: stateFromStores, guildId: "Array" };
    const items3 = [closure_5(tmp3(1178).Avatar, obj), ];
    const obj1 = { variant: "text-xs/semibold", color: "text-muted", children: tmp7 };
    items3[1] = closure_5(tmp3(4556).Text, obj1);
    obj.children = items3;
    tmp8 = closure_6(View, obj);
  }
  return tmp8;
};