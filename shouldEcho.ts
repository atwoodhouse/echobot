import { config } from "dotenv";
import type { IsFrom } from "./types";

config();

const sourceThreadId = process.env.SOURCE_THREAD_ID;
const targetThreadId = process.env.TARGET_THREAD_ID;
const bidirectional = process.env.BIDIRECTIONAL === "true";

export const shouldEcho = (
  isFrom: IsFrom,
  messageThreadId: string | undefined,
) => {
  if (!isFrom.source && !isFrom.target) {
    return false;
  }

  if (isFrom.source) {
    if (sourceThreadId && messageThreadId !== sourceThreadId) {
      return false;
    }
  } else {
    if (
      !bidirectional ||
      (targetThreadId && messageThreadId !== targetThreadId)
    ) {
      return false;
    }
  }

  return true;
};
