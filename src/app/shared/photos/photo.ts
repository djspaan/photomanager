// TODO: Implement this interface application wide
export interface Picture {
  id: number;
  title: string;
  description: string;
  location: string;
  createdAt?: number;

  getFormattedCreatedAt(): string;
}

export class Photo implements Picture {
  public id: number;
  public title: string;
  public description: string;
  public location: string;
  public createdAt: number;

  constructor(id: number = 0, title = '', description: string = '', location: string = '', createdAt: number = null) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.location = location;
    this.createdAt = createdAt || +new Date();
  }

  public getFormattedCreatedAt(): string {
    return new Date(this.createdAt).toDateString();
  }
}
