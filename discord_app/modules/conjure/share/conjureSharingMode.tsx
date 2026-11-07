// === Module 12414: conjureSharingMode ===

// Module 12414 (conjureSharingMode)
import conjureSharingFlags from "conjureSharingFlags" /* 12415 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharingMode.tsx");

export function conjureSharingMode(stateFromStores, shareLinksEnabled) {
  let str = "public";
  if (!obj.isProjectPublic(stateFromStores)) {
    let tmp2 = null;
    if (null != shareLinksEnabled) {
      let str2 = "collaborators";
      if (shareLinksEnabled) {
        str2 = "link";
      }
      tmp2 = str2;
    }
    str = tmp2;
  }
  return str;
}
export function conjureSharingChange(flags, arg1, arg2) {
  const conjureSharingFlagsResult = conjureSharingFlags.conjureSharingFlags(flags, "public" === arg2);
  if (null == conjureSharingFlagsResult) {
    return null;
  } else {
    const obj2 = {};
    if (conjureSharingFlagsResult !== flags.flags) {
      obj2.flags = conjureSharingFlagsResult;
    }
    let tmp3 = "link" === arg2;
    if (tmp3) {
      tmp3 = true !== arg1;
    }
    if (tmp3) {
      obj2.share_links_enabled = true;
    }
    let tmp4 = "collaborators" === arg2;
    if (tmp4) {
      tmp4 = false !== arg1;
    }
    if (tmp4) {
      obj2.share_links_enabled = false;
    }
    return obj2;
  }
}