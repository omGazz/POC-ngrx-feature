export abstract class APIPort<T> {
  public abstract stamp(): void;
  public abstract add(value: string): void;
  public abstract remove(value: string): void;
  public abstract getAll(): T[];
}
