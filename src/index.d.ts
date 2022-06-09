export abstract class HttpErrorAbstract implements Error {
  public name:string
  public abstract statusCode:number
  public message: string 
  public code?: number
  public previous?: Error
}
