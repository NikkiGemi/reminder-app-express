export default class Reminder {
  id: number;
  isCompleted: Boolean;

  constructor(public title: string) {
    this.id = Date.now();
    this.isCompleted = false;
    this.title = title;
  }
}
