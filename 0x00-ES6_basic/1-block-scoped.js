export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
	/* if block    eslint-disabled 
	 * no-unused vars
	 * eslint-disabled on line 2
	 * no unused var
	 */

  if (trueOrFalse) {
    const task = true; 
    const task2 = false;
  }

  return [task, task2];
}
