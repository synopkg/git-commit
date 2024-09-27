import { outro } from '@clack/prompts';
import { execa } from 'execa';

export const getGitCommitLatestVersion = async (): Promise<
  string | undefined
> => {
  try {
    const { stdout } = await execa('npm', ['view', 'git-commit', 'version']);
    return stdout;
  } catch (_) {
    outro('Error while getting the latest version of git-commit');
    return undefined;
  }
};
