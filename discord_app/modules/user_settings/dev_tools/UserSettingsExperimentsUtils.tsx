// discord_app/modules/user_settings/dev_tools/UserSettingsExperimentsUtils.tsx
import flattenDefault from "../../../../_runtime/04669_flatten.js";
import size from "../../../../_runtime/metro/00002__.js";

function matchesDeep(item10014, item10021) {
  if (Array.isArray(item10014)) {
    const obj2 = item10014[Symbol.iterator]();
    while (obj2 !== undefined) {
      if (matchesDeep(tmp8, item10021)) {
        obj2.return();
        let flag3 = true;
        return true;
      }
    }
  } else {
    if (typeof item10014 === "object") {
      if (null !== item10014) {
        const _Object = Object;
        const values = Object.values(item10014);
        for (const item10014 of values) {
          if (matchesDeep(item10014, arg1)) {
            obj.return();
            let flag2 = true;
            return true;
          }
        }
      }
    }
    if (typeof item10014 === "string") {
      const formatted = item10014.toLowerCase();
      if (formatted.includes(item10021.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
}
const re2 = /^(\d{4}-\d{1,2})/;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsExperimentsUtils.tsx");

export const getExperimentDateFromId = function getExperimentDateFromId(arg0) {
  const match = re2.exec(arg0);
  let tmp2 = null;
  if (null != match) {
    tmp2 = match[1];
  }
  return tmp2;
};
export const getEntries = function getEntries(arg0) {
  return Array.from(Object.entries(arg0)).map((item) => {
    [tmp, tmp2] = item;
    return { id, experiment };
  });
};
export { matchesDeep };
export const sortEntries = function sortEntries(entries, memo1) {
  const substr = entries.slice();
  return substr.sort((id, id2) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (null != memo1[id]) {
      let id1;
      if (id2 != null) {
        id1 = id2.id;
      }
      if (null == tmp[id1]) {
        return -1;
      }
    }
    id2 = undefined;
    if (id != null) {
      id2 = id.id;
    }
    if (null == memo1[id2]) {
      let id3;
      if (id2 != null) {
        id3 = id2.id;
      }
      if (null != tmp[id3]) {
        return 1;
      }
    }
    const match = re2.exec(id.id);
    let tmp7 = null;
    if (null != match) {
      tmp7 = match[1];
    }
    const match1 = re2.exec(id2.id);
    let tmp9 = null;
    if (null != match1) {
      tmp9 = match1[1];
    }
    if (null != tmp7) {
      if (null != tmp9) {
        const localeCompareResult = tmp9.localeCompare(tmp7);
        if (0 !== localeCompareResult) {
          return localeCompareResult;
        }
      }
    }
    const title = id.experiment.title;
    return title.localeCompare(id2.experiment.title);
  });
};
export const getBestMatches = function getBestMatches(arg0, str) {
  const parts = str.split(/\s+/g);
  const found = parts.filter((item) => "" !== item);
  if (0 === found.length) {
    return arg0;
  } else {
    const items = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let num = 0;
      for (const item10021 of found) {
        if (matchesDeep(tmp4, item10021)) {
          num = num + 1;
        }
        continue;
      }
      if (0 !== num) {
        if (null == items[num]) {
          items[num] = [];
        }
        let arr3 = items[num];
        let arr = arr3.push(tmp4);
      }
      continue;
    }
    const found1 = items.filter((item) => undefined !== item);
    return flattenDefault(found1.reverse());
  }
};
