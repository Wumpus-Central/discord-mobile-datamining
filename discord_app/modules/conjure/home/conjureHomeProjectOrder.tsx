// === Module 14663: conjureHomeProjectOrder ===

// Module 14663 (conjureHomeProjectOrder)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectOrder.tsx");

export function sortConjureProjectsByActivity(arr) {
  const mapped = arr.map((project) => {
    const obj = { project: project.project, time: null };
    ({ project, turnStartedAt, finishedAt } = project);
    let num = 0;
    if (obj2.test(project.id)) {
      num = SnowflakeUtilsDefault.extractTimestamp(project.id);
    }
    const updated_at = project.updated_at;
    let num2 = 0;
    if (null != updated_at) {
      const _Date = Date;
      num2 = Date.parse(updated_at);
    }
    let num3 = 0;
    if (!Number.isNaN(num2)) {
      num3 = num2;
    }
    if (turnStartedAt == null) {
      turnStartedAt = 0;
    }
    if (finishedAt == null) {
      finishedAt = 0;
    }
    obj.time = Math.max(num, num3, turnStartedAt, finishedAt);
    return obj;
  });
  const sorted = mapped.sort((time, time2) => {
    if (time.time !== time2.time) {
      let num = time2.time - time.time;
    } else {
      const id = time.project.id;
      const id1 = time2.project.id;
      if (id.length !== id1.length) {
        num = id1.length - id.length;
      } else {
        num = 1;
        if (id >= id1) {
          let num2 = 0;
          if (id > id1) {
            num2 = -1;
          }
          num = num2;
        }
      }
    }
    return num;
  });
  return sorted.map((project) => project.project);
}