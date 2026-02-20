
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Computer
 * 
 */
export type Computer = $Result.DefaultSelection<Prisma.$ComputerPayload>
/**
 * Model Employe
 * 
 */
export type Employe = $Result.DefaultSelection<Prisma.$EmployePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Computers
 * const computers = await prisma.computer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Computers
   * const computers = await prisma.computer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.computer`: Exposes CRUD operations for the **Computer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Computers
    * const computers = await prisma.computer.findMany()
    * ```
    */
  get computer(): Prisma.ComputerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employe`: Exposes CRUD operations for the **Employe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employes
    * const employes = await prisma.employe.findMany()
    * ```
    */
  get employe(): Prisma.EmployeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Computer: 'Computer',
    Employe: 'Employe',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "computer" | "employe" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Computer: {
        payload: Prisma.$ComputerPayload<ExtArgs>
        fields: Prisma.ComputerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComputerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComputerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          findFirst: {
            args: Prisma.ComputerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComputerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          findMany: {
            args: Prisma.ComputerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>[]
          }
          create: {
            args: Prisma.ComputerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          createMany: {
            args: Prisma.ComputerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComputerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          update: {
            args: Prisma.ComputerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          deleteMany: {
            args: Prisma.ComputerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComputerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComputerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          aggregate: {
            args: Prisma.ComputerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComputer>
          }
          groupBy: {
            args: Prisma.ComputerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComputerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComputerCountArgs<ExtArgs>
            result: $Utils.Optional<ComputerCountAggregateOutputType> | number
          }
        }
      }
      Employe: {
        payload: Prisma.$EmployePayload<ExtArgs>
        fields: Prisma.EmployeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findFirst: {
            args: Prisma.EmployeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findMany: {
            args: Prisma.EmployeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          create: {
            args: Prisma.EmployeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          createMany: {
            args: Prisma.EmployeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          update: {
            args: Prisma.EmployeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          deleteMany: {
            args: Prisma.EmployeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          aggregate: {
            args: Prisma.EmployeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmploye>
          }
          groupBy: {
            args: Prisma.EmployeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    computer?: ComputerOmit
    employe?: EmployeOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employes: number
    computers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employes?: boolean | UserCountOutputTypeCountEmployesArgs
    computers?: boolean | UserCountOutputTypeCountComputersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComputersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComputerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Computer
   */

  export type AggregateComputer = {
    _count: ComputerCountAggregateOutputType | null
    _avg: ComputerAvgAggregateOutputType | null
    _sum: ComputerSumAggregateOutputType | null
    _min: ComputerMinAggregateOutputType | null
    _max: ComputerMaxAggregateOutputType | null
  }

  export type ComputerAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    employeId: number | null
  }

  export type ComputerSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    employeId: number | null
  }

  export type ComputerMinAggregateOutputType = {
    id: number | null
    adresseMac: string | null
    companyId: number | null
    employeId: number | null
  }

  export type ComputerMaxAggregateOutputType = {
    id: number | null
    adresseMac: string | null
    companyId: number | null
    employeId: number | null
  }

  export type ComputerCountAggregateOutputType = {
    id: number
    adresseMac: number
    companyId: number
    employeId: number
    _all: number
  }


  export type ComputerAvgAggregateInputType = {
    id?: true
    companyId?: true
    employeId?: true
  }

  export type ComputerSumAggregateInputType = {
    id?: true
    companyId?: true
    employeId?: true
  }

  export type ComputerMinAggregateInputType = {
    id?: true
    adresseMac?: true
    companyId?: true
    employeId?: true
  }

  export type ComputerMaxAggregateInputType = {
    id?: true
    adresseMac?: true
    companyId?: true
    employeId?: true
  }

  export type ComputerCountAggregateInputType = {
    id?: true
    adresseMac?: true
    companyId?: true
    employeId?: true
    _all?: true
  }

  export type ComputerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Computer to aggregate.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Computers
    **/
    _count?: true | ComputerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComputerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComputerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComputerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComputerMaxAggregateInputType
  }

  export type GetComputerAggregateType<T extends ComputerAggregateArgs> = {
        [P in keyof T & keyof AggregateComputer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComputer[P]>
      : GetScalarType<T[P], AggregateComputer[P]>
  }




  export type ComputerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComputerWhereInput
    orderBy?: ComputerOrderByWithAggregationInput | ComputerOrderByWithAggregationInput[]
    by: ComputerScalarFieldEnum[] | ComputerScalarFieldEnum
    having?: ComputerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComputerCountAggregateInputType | true
    _avg?: ComputerAvgAggregateInputType
    _sum?: ComputerSumAggregateInputType
    _min?: ComputerMinAggregateInputType
    _max?: ComputerMaxAggregateInputType
  }

  export type ComputerGroupByOutputType = {
    id: number
    adresseMac: string
    companyId: number
    employeId: number | null
    _count: ComputerCountAggregateOutputType | null
    _avg: ComputerAvgAggregateOutputType | null
    _sum: ComputerSumAggregateOutputType | null
    _min: ComputerMinAggregateOutputType | null
    _max: ComputerMaxAggregateOutputType | null
  }

  type GetComputerGroupByPayload<T extends ComputerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComputerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComputerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComputerGroupByOutputType[P]>
            : GetScalarType<T[P], ComputerGroupByOutputType[P]>
        }
      >
    >


  export type ComputerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adresseMac?: boolean
    companyId?: boolean
    employeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    employe?: boolean | Computer$employeArgs<ExtArgs>
  }, ExtArgs["result"]["computer"]>



  export type ComputerSelectScalar = {
    id?: boolean
    adresseMac?: boolean
    companyId?: boolean
    employeId?: boolean
  }

  export type ComputerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adresseMac" | "companyId" | "employeId", ExtArgs["result"]["computer"]>
  export type ComputerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    employe?: boolean | Computer$employeArgs<ExtArgs>
  }

  export type $ComputerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Computer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      employe: Prisma.$EmployePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adresseMac: string
      companyId: number
      employeId: number | null
    }, ExtArgs["result"]["computer"]>
    composites: {}
  }

  type ComputerGetPayload<S extends boolean | null | undefined | ComputerDefaultArgs> = $Result.GetResult<Prisma.$ComputerPayload, S>

  type ComputerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComputerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComputerCountAggregateInputType | true
    }

  export interface ComputerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Computer'], meta: { name: 'Computer' } }
    /**
     * Find zero or one Computer that matches the filter.
     * @param {ComputerFindUniqueArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComputerFindUniqueArgs>(args: SelectSubset<T, ComputerFindUniqueArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Computer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComputerFindUniqueOrThrowArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComputerFindUniqueOrThrowArgs>(args: SelectSubset<T, ComputerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Computer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerFindFirstArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComputerFindFirstArgs>(args?: SelectSubset<T, ComputerFindFirstArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Computer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerFindFirstOrThrowArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComputerFindFirstOrThrowArgs>(args?: SelectSubset<T, ComputerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Computers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Computers
     * const computers = await prisma.computer.findMany()
     * 
     * // Get first 10 Computers
     * const computers = await prisma.computer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const computerWithIdOnly = await prisma.computer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComputerFindManyArgs>(args?: SelectSubset<T, ComputerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Computer.
     * @param {ComputerCreateArgs} args - Arguments to create a Computer.
     * @example
     * // Create one Computer
     * const Computer = await prisma.computer.create({
     *   data: {
     *     // ... data to create a Computer
     *   }
     * })
     * 
     */
    create<T extends ComputerCreateArgs>(args: SelectSubset<T, ComputerCreateArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Computers.
     * @param {ComputerCreateManyArgs} args - Arguments to create many Computers.
     * @example
     * // Create many Computers
     * const computer = await prisma.computer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComputerCreateManyArgs>(args?: SelectSubset<T, ComputerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Computer.
     * @param {ComputerDeleteArgs} args - Arguments to delete one Computer.
     * @example
     * // Delete one Computer
     * const Computer = await prisma.computer.delete({
     *   where: {
     *     // ... filter to delete one Computer
     *   }
     * })
     * 
     */
    delete<T extends ComputerDeleteArgs>(args: SelectSubset<T, ComputerDeleteArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Computer.
     * @param {ComputerUpdateArgs} args - Arguments to update one Computer.
     * @example
     * // Update one Computer
     * const computer = await prisma.computer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComputerUpdateArgs>(args: SelectSubset<T, ComputerUpdateArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Computers.
     * @param {ComputerDeleteManyArgs} args - Arguments to filter Computers to delete.
     * @example
     * // Delete a few Computers
     * const { count } = await prisma.computer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComputerDeleteManyArgs>(args?: SelectSubset<T, ComputerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Computers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Computers
     * const computer = await prisma.computer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComputerUpdateManyArgs>(args: SelectSubset<T, ComputerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Computer.
     * @param {ComputerUpsertArgs} args - Arguments to update or create a Computer.
     * @example
     * // Update or create a Computer
     * const computer = await prisma.computer.upsert({
     *   create: {
     *     // ... data to create a Computer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Computer we want to update
     *   }
     * })
     */
    upsert<T extends ComputerUpsertArgs>(args: SelectSubset<T, ComputerUpsertArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Computers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerCountArgs} args - Arguments to filter Computers to count.
     * @example
     * // Count the number of Computers
     * const count = await prisma.computer.count({
     *   where: {
     *     // ... the filter for the Computers we want to count
     *   }
     * })
    **/
    count<T extends ComputerCountArgs>(
      args?: Subset<T, ComputerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComputerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Computer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComputerAggregateArgs>(args: Subset<T, ComputerAggregateArgs>): Prisma.PrismaPromise<GetComputerAggregateType<T>>

    /**
     * Group by Computer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComputerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComputerGroupByArgs['orderBy'] }
        : { orderBy?: ComputerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComputerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComputerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Computer model
   */
  readonly fields: ComputerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Computer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComputerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employe<T extends Computer$employeArgs<ExtArgs> = {}>(args?: Subset<T, Computer$employeArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Computer model
   */
  interface ComputerFieldRefs {
    readonly id: FieldRef<"Computer", 'Int'>
    readonly adresseMac: FieldRef<"Computer", 'String'>
    readonly companyId: FieldRef<"Computer", 'Int'>
    readonly employeId: FieldRef<"Computer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Computer findUnique
   */
  export type ComputerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where: ComputerWhereUniqueInput
  }

  /**
   * Computer findUniqueOrThrow
   */
  export type ComputerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where: ComputerWhereUniqueInput
  }

  /**
   * Computer findFirst
   */
  export type ComputerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Computers.
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Computers.
     */
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }

  /**
   * Computer findFirstOrThrow
   */
  export type ComputerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Computers.
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Computers.
     */
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }

  /**
   * Computer findMany
   */
  export type ComputerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computers to fetch.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Computers.
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }

  /**
   * Computer create
   */
  export type ComputerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * The data needed to create a Computer.
     */
    data: XOR<ComputerCreateInput, ComputerUncheckedCreateInput>
  }

  /**
   * Computer createMany
   */
  export type ComputerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Computers.
     */
    data: ComputerCreateManyInput | ComputerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Computer update
   */
  export type ComputerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * The data needed to update a Computer.
     */
    data: XOR<ComputerUpdateInput, ComputerUncheckedUpdateInput>
    /**
     * Choose, which Computer to update.
     */
    where: ComputerWhereUniqueInput
  }

  /**
   * Computer updateMany
   */
  export type ComputerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Computers.
     */
    data: XOR<ComputerUpdateManyMutationInput, ComputerUncheckedUpdateManyInput>
    /**
     * Filter which Computers to update
     */
    where?: ComputerWhereInput
    /**
     * Limit how many Computers to update.
     */
    limit?: number
  }

  /**
   * Computer upsert
   */
  export type ComputerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * The filter to search for the Computer to update in case it exists.
     */
    where: ComputerWhereUniqueInput
    /**
     * In case the Computer found by the `where` argument doesn't exist, create a new Computer with this data.
     */
    create: XOR<ComputerCreateInput, ComputerUncheckedCreateInput>
    /**
     * In case the Computer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComputerUpdateInput, ComputerUncheckedUpdateInput>
  }

  /**
   * Computer delete
   */
  export type ComputerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter which Computer to delete.
     */
    where: ComputerWhereUniqueInput
  }

  /**
   * Computer deleteMany
   */
  export type ComputerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Computers to delete
     */
    where?: ComputerWhereInput
    /**
     * Limit how many Computers to delete.
     */
    limit?: number
  }

  /**
   * Computer.employe
   */
  export type Computer$employeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    where?: EmployeWhereInput
  }

  /**
   * Computer without action
   */
  export type ComputerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
  }


  /**
   * Model Employe
   */

  export type AggregateEmploye = {
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  export type EmployeAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type EmployeSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type EmployeMinAggregateOutputType = {
    id: number | null
    lastName: string | null
    firstName: string | null
    mail: string | null
    password: string | null
    companyId: number | null
  }

  export type EmployeMaxAggregateOutputType = {
    id: number | null
    lastName: string | null
    firstName: string | null
    mail: string | null
    password: string | null
    companyId: number | null
  }

  export type EmployeCountAggregateOutputType = {
    id: number
    lastName: number
    firstName: number
    mail: number
    password: number
    companyId: number
    _all: number
  }


  export type EmployeAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type EmployeSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type EmployeMinAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    mail?: true
    password?: true
    companyId?: true
  }

  export type EmployeMaxAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    mail?: true
    password?: true
    companyId?: true
  }

  export type EmployeCountAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    mail?: true
    password?: true
    companyId?: true
    _all?: true
  }

  export type EmployeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employe to aggregate.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employes
    **/
    _count?: true | EmployeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeMaxAggregateInputType
  }

  export type GetEmployeAggregateType<T extends EmployeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmploye]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmploye[P]>
      : GetScalarType<T[P], AggregateEmploye[P]>
  }




  export type EmployeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeWhereInput
    orderBy?: EmployeOrderByWithAggregationInput | EmployeOrderByWithAggregationInput[]
    by: EmployeScalarFieldEnum[] | EmployeScalarFieldEnum
    having?: EmployeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeCountAggregateInputType | true
    _avg?: EmployeAvgAggregateInputType
    _sum?: EmployeSumAggregateInputType
    _min?: EmployeMinAggregateInputType
    _max?: EmployeMaxAggregateInputType
  }

  export type EmployeGroupByOutputType = {
    id: number
    lastName: string
    firstName: string
    mail: string
    password: string
    companyId: number
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  type GetEmployeGroupByPayload<T extends EmployeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    mail?: boolean
    password?: boolean
    companyId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    computer?: boolean | Employe$computerArgs<ExtArgs>
  }, ExtArgs["result"]["employe"]>



  export type EmployeSelectScalar = {
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    mail?: boolean
    password?: boolean
    companyId?: boolean
  }

  export type EmployeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastName" | "firstName" | "mail" | "password" | "companyId", ExtArgs["result"]["employe"]>
  export type EmployeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    computer?: boolean | Employe$computerArgs<ExtArgs>
  }

  export type $EmployePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      computer: Prisma.$ComputerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lastName: string
      firstName: string
      mail: string
      password: string
      companyId: number
    }, ExtArgs["result"]["employe"]>
    composites: {}
  }

  type EmployeGetPayload<S extends boolean | null | undefined | EmployeDefaultArgs> = $Result.GetResult<Prisma.$EmployePayload, S>

  type EmployeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeCountAggregateInputType | true
    }

  export interface EmployeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employe'], meta: { name: 'Employe' } }
    /**
     * Find zero or one Employe that matches the filter.
     * @param {EmployeFindUniqueArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeFindUniqueArgs>(args: SelectSubset<T, EmployeFindUniqueArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeFindUniqueOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeFindFirstArgs>(args?: SelectSubset<T, EmployeFindFirstArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employes
     * const employes = await prisma.employe.findMany()
     * 
     * // Get first 10 Employes
     * const employes = await prisma.employe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeWithIdOnly = await prisma.employe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeFindManyArgs>(args?: SelectSubset<T, EmployeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employe.
     * @param {EmployeCreateArgs} args - Arguments to create a Employe.
     * @example
     * // Create one Employe
     * const Employe = await prisma.employe.create({
     *   data: {
     *     // ... data to create a Employe
     *   }
     * })
     * 
     */
    create<T extends EmployeCreateArgs>(args: SelectSubset<T, EmployeCreateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employes.
     * @param {EmployeCreateManyArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employe = await prisma.employe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeCreateManyArgs>(args?: SelectSubset<T, EmployeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employe.
     * @param {EmployeDeleteArgs} args - Arguments to delete one Employe.
     * @example
     * // Delete one Employe
     * const Employe = await prisma.employe.delete({
     *   where: {
     *     // ... filter to delete one Employe
     *   }
     * })
     * 
     */
    delete<T extends EmployeDeleteArgs>(args: SelectSubset<T, EmployeDeleteArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employe.
     * @param {EmployeUpdateArgs} args - Arguments to update one Employe.
     * @example
     * // Update one Employe
     * const employe = await prisma.employe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeUpdateArgs>(args: SelectSubset<T, EmployeUpdateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employes.
     * @param {EmployeDeleteManyArgs} args - Arguments to filter Employes to delete.
     * @example
     * // Delete a few Employes
     * const { count } = await prisma.employe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeDeleteManyArgs>(args?: SelectSubset<T, EmployeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employes
     * const employe = await prisma.employe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeUpdateManyArgs>(args: SelectSubset<T, EmployeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employe.
     * @param {EmployeUpsertArgs} args - Arguments to update or create a Employe.
     * @example
     * // Update or create a Employe
     * const employe = await prisma.employe.upsert({
     *   create: {
     *     // ... data to create a Employe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employe we want to update
     *   }
     * })
     */
    upsert<T extends EmployeUpsertArgs>(args: SelectSubset<T, EmployeUpsertArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeCountArgs} args - Arguments to filter Employes to count.
     * @example
     * // Count the number of Employes
     * const count = await prisma.employe.count({
     *   where: {
     *     // ... the filter for the Employes we want to count
     *   }
     * })
    **/
    count<T extends EmployeCountArgs>(
      args?: Subset<T, EmployeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeAggregateArgs>(args: Subset<T, EmployeAggregateArgs>): Prisma.PrismaPromise<GetEmployeAggregateType<T>>

    /**
     * Group by Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employe model
   */
  readonly fields: EmployeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    computer<T extends Employe$computerArgs<ExtArgs> = {}>(args?: Subset<T, Employe$computerArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employe model
   */
  interface EmployeFieldRefs {
    readonly id: FieldRef<"Employe", 'Int'>
    readonly lastName: FieldRef<"Employe", 'String'>
    readonly firstName: FieldRef<"Employe", 'String'>
    readonly mail: FieldRef<"Employe", 'String'>
    readonly password: FieldRef<"Employe", 'String'>
    readonly companyId: FieldRef<"Employe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employe findUnique
   */
  export type EmployeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findUniqueOrThrow
   */
  export type EmployeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findFirst
   */
  export type EmployeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findFirstOrThrow
   */
  export type EmployeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findMany
   */
  export type EmployeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe create
   */
  export type EmployeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employe.
     */
    data: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
  }

  /**
   * Employe createMany
   */
  export type EmployeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employes.
     */
    data: EmployeCreateManyInput | EmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employe update
   */
  export type EmployeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employe.
     */
    data: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
    /**
     * Choose, which Employe to update.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe updateMany
   */
  export type EmployeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employe upsert
   */
  export type EmployeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employe to update in case it exists.
     */
    where: EmployeWhereUniqueInput
    /**
     * In case the Employe found by the `where` argument doesn't exist, create a new Employe with this data.
     */
    create: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
    /**
     * In case the Employe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
  }

  /**
   * Employe delete
   */
  export type EmployeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter which Employe to delete.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe deleteMany
   */
  export type EmployeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employes to delete
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to delete.
     */
    limit?: number
  }

  /**
   * Employe.computer
   */
  export type Employe$computerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    where?: ComputerWhereInput
  }

  /**
   * Employe without action
   */
  export type EmployeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    siretNumber: string | null
    password: string | null
    directorName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    siretNumber: string | null
    password: string | null
    directorName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    companyName: number
    siretNumber: number
    password: number
    directorName: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    companyName?: true
    siretNumber?: true
    password?: true
    directorName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    companyName?: true
    siretNumber?: true
    password?: true
    directorName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    companyName?: true
    siretNumber?: true
    password?: true
    directorName?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    companyName: string
    siretNumber: string
    password: string
    directorName: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    siretNumber?: boolean
    password?: boolean
    directorName?: boolean
    employes?: boolean | User$employesArgs<ExtArgs>
    computers?: boolean | User$computersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    companyName?: boolean
    siretNumber?: boolean
    password?: boolean
    directorName?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "siretNumber" | "password" | "directorName", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employes?: boolean | User$employesArgs<ExtArgs>
    computers?: boolean | User$computersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employes: Prisma.$EmployePayload<ExtArgs>[]
      computers: Prisma.$ComputerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      siretNumber: string
      password: string
      directorName: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employes<T extends User$employesArgs<ExtArgs> = {}>(args?: Subset<T, User$employesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    computers<T extends User$computersArgs<ExtArgs> = {}>(args?: Subset<T, User$computersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly siretNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly directorName: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employes
   */
  export type User$employesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    where?: EmployeWhereInput
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    cursor?: EmployeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * User.computers
   */
  export type User$computersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Computer
     */
    omit?: ComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerInclude<ExtArgs> | null
    where?: ComputerWhereInput
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    cursor?: ComputerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ComputerScalarFieldEnum: {
    id: 'id',
    adresseMac: 'adresseMac',
    companyId: 'companyId',
    employeId: 'employeId'
  };

  export type ComputerScalarFieldEnum = (typeof ComputerScalarFieldEnum)[keyof typeof ComputerScalarFieldEnum]


  export const EmployeScalarFieldEnum: {
    id: 'id',
    lastName: 'lastName',
    firstName: 'firstName',
    mail: 'mail',
    password: 'password',
    companyId: 'companyId'
  };

  export type EmployeScalarFieldEnum = (typeof EmployeScalarFieldEnum)[keyof typeof EmployeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    siretNumber: 'siretNumber',
    password: 'password',
    directorName: 'directorName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ComputerOrderByRelevanceFieldEnum: {
    adresseMac: 'adresseMac'
  };

  export type ComputerOrderByRelevanceFieldEnum = (typeof ComputerOrderByRelevanceFieldEnum)[keyof typeof ComputerOrderByRelevanceFieldEnum]


  export const EmployeOrderByRelevanceFieldEnum: {
    lastName: 'lastName',
    firstName: 'firstName',
    mail: 'mail',
    password: 'password'
  };

  export type EmployeOrderByRelevanceFieldEnum = (typeof EmployeOrderByRelevanceFieldEnum)[keyof typeof EmployeOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    companyName: 'companyName',
    siretNumber: 'siretNumber',
    password: 'password',
    directorName: 'directorName'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ComputerWhereInput = {
    AND?: ComputerWhereInput | ComputerWhereInput[]
    OR?: ComputerWhereInput[]
    NOT?: ComputerWhereInput | ComputerWhereInput[]
    id?: IntFilter<"Computer"> | number
    adresseMac?: StringFilter<"Computer"> | string
    companyId?: IntFilter<"Computer"> | number
    employeId?: IntNullableFilter<"Computer"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employe?: XOR<EmployeNullableScalarRelationFilter, EmployeWhereInput> | null
  }

  export type ComputerOrderByWithRelationInput = {
    id?: SortOrder
    adresseMac?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    employe?: EmployeOrderByWithRelationInput
    _relevance?: ComputerOrderByRelevanceInput
  }

  export type ComputerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employeId?: number
    AND?: ComputerWhereInput | ComputerWhereInput[]
    OR?: ComputerWhereInput[]
    NOT?: ComputerWhereInput | ComputerWhereInput[]
    adresseMac?: StringFilter<"Computer"> | string
    companyId?: IntFilter<"Computer"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employe?: XOR<EmployeNullableScalarRelationFilter, EmployeWhereInput> | null
  }, "id" | "employeId">

  export type ComputerOrderByWithAggregationInput = {
    id?: SortOrder
    adresseMac?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrderInput | SortOrder
    _count?: ComputerCountOrderByAggregateInput
    _avg?: ComputerAvgOrderByAggregateInput
    _max?: ComputerMaxOrderByAggregateInput
    _min?: ComputerMinOrderByAggregateInput
    _sum?: ComputerSumOrderByAggregateInput
  }

  export type ComputerScalarWhereWithAggregatesInput = {
    AND?: ComputerScalarWhereWithAggregatesInput | ComputerScalarWhereWithAggregatesInput[]
    OR?: ComputerScalarWhereWithAggregatesInput[]
    NOT?: ComputerScalarWhereWithAggregatesInput | ComputerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Computer"> | number
    adresseMac?: StringWithAggregatesFilter<"Computer"> | string
    companyId?: IntWithAggregatesFilter<"Computer"> | number
    employeId?: IntNullableWithAggregatesFilter<"Computer"> | number | null
  }

  export type EmployeWhereInput = {
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    id?: IntFilter<"Employe"> | number
    lastName?: StringFilter<"Employe"> | string
    firstName?: StringFilter<"Employe"> | string
    mail?: StringFilter<"Employe"> | string
    password?: StringFilter<"Employe"> | string
    companyId?: IntFilter<"Employe"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    computer?: XOR<ComputerNullableScalarRelationFilter, ComputerWhereInput> | null
  }

  export type EmployeOrderByWithRelationInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    user?: UserOrderByWithRelationInput
    computer?: ComputerOrderByWithRelationInput
    _relevance?: EmployeOrderByRelevanceInput
  }

  export type EmployeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    lastName?: StringFilter<"Employe"> | string
    firstName?: StringFilter<"Employe"> | string
    mail?: StringFilter<"Employe"> | string
    password?: StringFilter<"Employe"> | string
    companyId?: IntFilter<"Employe"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    computer?: XOR<ComputerNullableScalarRelationFilter, ComputerWhereInput> | null
  }, "id">

  export type EmployeOrderByWithAggregationInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    _count?: EmployeCountOrderByAggregateInput
    _avg?: EmployeAvgOrderByAggregateInput
    _max?: EmployeMaxOrderByAggregateInput
    _min?: EmployeMinOrderByAggregateInput
    _sum?: EmployeSumOrderByAggregateInput
  }

  export type EmployeScalarWhereWithAggregatesInput = {
    AND?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    OR?: EmployeScalarWhereWithAggregatesInput[]
    NOT?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employe"> | number
    lastName?: StringWithAggregatesFilter<"Employe"> | string
    firstName?: StringWithAggregatesFilter<"Employe"> | string
    mail?: StringWithAggregatesFilter<"Employe"> | string
    password?: StringWithAggregatesFilter<"Employe"> | string
    companyId?: IntWithAggregatesFilter<"Employe"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    companyName?: StringFilter<"User"> | string
    siretNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    directorName?: StringNullableFilter<"User"> | string | null
    employes?: EmployeListRelationFilter
    computers?: ComputerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    siretNumber?: SortOrder
    password?: SortOrder
    directorName?: SortOrderInput | SortOrder
    employes?: EmployeOrderByRelationAggregateInput
    computers?: ComputerOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    siretNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    companyName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    directorName?: StringNullableFilter<"User"> | string | null
    employes?: EmployeListRelationFilter
    computers?: ComputerListRelationFilter
  }, "id" | "siretNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    siretNumber?: SortOrder
    password?: SortOrder
    directorName?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    companyName?: StringWithAggregatesFilter<"User"> | string
    siretNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    directorName?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ComputerCreateInput = {
    adresseMac: string
    user: UserCreateNestedOneWithoutComputersInput
    employe?: EmployeCreateNestedOneWithoutComputerInput
  }

  export type ComputerUncheckedCreateInput = {
    id?: number
    adresseMac: string
    companyId: number
    employeId?: number | null
  }

  export type ComputerUpdateInput = {
    adresseMac?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutComputersNestedInput
    employe?: EmployeUpdateOneWithoutComputerNestedInput
  }

  export type ComputerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adresseMac?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    employeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComputerCreateManyInput = {
    id?: number
    adresseMac: string
    companyId: number
    employeId?: number | null
  }

  export type ComputerUpdateManyMutationInput = {
    adresseMac?: StringFieldUpdateOperationsInput | string
  }

  export type ComputerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adresseMac?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    employeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmployeCreateInput = {
    lastName: string
    firstName: string
    mail: string
    password: string
    user: UserCreateNestedOneWithoutEmployesInput
    computer?: ComputerCreateNestedOneWithoutEmployeInput
  }

  export type EmployeUncheckedCreateInput = {
    id?: number
    lastName: string
    firstName: string
    mail: string
    password: string
    companyId: number
    computer?: ComputerUncheckedCreateNestedOneWithoutEmployeInput
  }

  export type EmployeUpdateInput = {
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEmployesNestedInput
    computer?: ComputerUpdateOneWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    computer?: ComputerUncheckedUpdateOneWithoutEmployeNestedInput
  }

  export type EmployeCreateManyInput = {
    id?: number
    lastName: string
    firstName: string
    mail: string
    password: string
    companyId: number
  }

  export type EmployeUpdateManyMutationInput = {
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
    employes?: EmployeCreateNestedManyWithoutUserInput
    computers?: ComputerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
    employes?: EmployeUncheckedCreateNestedManyWithoutUserInput
    computers?: ComputerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: EmployeUpdateManyWithoutUserNestedInput
    computers?: ComputerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: EmployeUncheckedUpdateManyWithoutUserNestedInput
    computers?: ComputerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
  }

  export type UserUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmployeNullableScalarRelationFilter = {
    is?: EmployeWhereInput | null
    isNot?: EmployeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ComputerOrderByRelevanceInput = {
    fields: ComputerOrderByRelevanceFieldEnum | ComputerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComputerCountOrderByAggregateInput = {
    id?: SortOrder
    adresseMac?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrder
  }

  export type ComputerAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrder
  }

  export type ComputerMaxOrderByAggregateInput = {
    id?: SortOrder
    adresseMac?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrder
  }

  export type ComputerMinOrderByAggregateInput = {
    id?: SortOrder
    adresseMac?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrder
  }

  export type ComputerSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ComputerNullableScalarRelationFilter = {
    is?: ComputerWhereInput | null
    isNot?: ComputerWhereInput | null
  }

  export type EmployeOrderByRelevanceInput = {
    fields: EmployeOrderByRelevanceFieldEnum | EmployeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeCountOrderByAggregateInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeMaxOrderByAggregateInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeMinOrderByAggregateInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmployeListRelationFilter = {
    every?: EmployeWhereInput
    some?: EmployeWhereInput
    none?: EmployeWhereInput
  }

  export type ComputerListRelationFilter = {
    every?: ComputerWhereInput
    some?: ComputerWhereInput
    none?: ComputerWhereInput
  }

  export type EmployeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComputerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    siretNumber?: SortOrder
    password?: SortOrder
    directorName?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    siretNumber?: SortOrder
    password?: SortOrder
    directorName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    siretNumber?: SortOrder
    password?: SortOrder
    directorName?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutComputersInput = {
    create?: XOR<UserCreateWithoutComputersInput, UserUncheckedCreateWithoutComputersInput>
    connectOrCreate?: UserCreateOrConnectWithoutComputersInput
    connect?: UserWhereUniqueInput
  }

  export type EmployeCreateNestedOneWithoutComputerInput = {
    create?: XOR<EmployeCreateWithoutComputerInput, EmployeUncheckedCreateWithoutComputerInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutComputerInput
    connect?: EmployeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutComputersNestedInput = {
    create?: XOR<UserCreateWithoutComputersInput, UserUncheckedCreateWithoutComputersInput>
    connectOrCreate?: UserCreateOrConnectWithoutComputersInput
    upsert?: UserUpsertWithoutComputersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComputersInput, UserUpdateWithoutComputersInput>, UserUncheckedUpdateWithoutComputersInput>
  }

  export type EmployeUpdateOneWithoutComputerNestedInput = {
    create?: XOR<EmployeCreateWithoutComputerInput, EmployeUncheckedCreateWithoutComputerInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutComputerInput
    upsert?: EmployeUpsertWithoutComputerInput
    disconnect?: EmployeWhereInput | boolean
    delete?: EmployeWhereInput | boolean
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutComputerInput, EmployeUpdateWithoutComputerInput>, EmployeUncheckedUpdateWithoutComputerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutEmployesInput = {
    create?: XOR<UserCreateWithoutEmployesInput, UserUncheckedCreateWithoutEmployesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployesInput
    connect?: UserWhereUniqueInput
  }

  export type ComputerCreateNestedOneWithoutEmployeInput = {
    create?: XOR<ComputerCreateWithoutEmployeInput, ComputerUncheckedCreateWithoutEmployeInput>
    connectOrCreate?: ComputerCreateOrConnectWithoutEmployeInput
    connect?: ComputerWhereUniqueInput
  }

  export type ComputerUncheckedCreateNestedOneWithoutEmployeInput = {
    create?: XOR<ComputerCreateWithoutEmployeInput, ComputerUncheckedCreateWithoutEmployeInput>
    connectOrCreate?: ComputerCreateOrConnectWithoutEmployeInput
    connect?: ComputerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmployesNestedInput = {
    create?: XOR<UserCreateWithoutEmployesInput, UserUncheckedCreateWithoutEmployesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployesInput
    upsert?: UserUpsertWithoutEmployesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployesInput, UserUpdateWithoutEmployesInput>, UserUncheckedUpdateWithoutEmployesInput>
  }

  export type ComputerUpdateOneWithoutEmployeNestedInput = {
    create?: XOR<ComputerCreateWithoutEmployeInput, ComputerUncheckedCreateWithoutEmployeInput>
    connectOrCreate?: ComputerCreateOrConnectWithoutEmployeInput
    upsert?: ComputerUpsertWithoutEmployeInput
    disconnect?: ComputerWhereInput | boolean
    delete?: ComputerWhereInput | boolean
    connect?: ComputerWhereUniqueInput
    update?: XOR<XOR<ComputerUpdateToOneWithWhereWithoutEmployeInput, ComputerUpdateWithoutEmployeInput>, ComputerUncheckedUpdateWithoutEmployeInput>
  }

  export type ComputerUncheckedUpdateOneWithoutEmployeNestedInput = {
    create?: XOR<ComputerCreateWithoutEmployeInput, ComputerUncheckedCreateWithoutEmployeInput>
    connectOrCreate?: ComputerCreateOrConnectWithoutEmployeInput
    upsert?: ComputerUpsertWithoutEmployeInput
    disconnect?: ComputerWhereInput | boolean
    delete?: ComputerWhereInput | boolean
    connect?: ComputerWhereUniqueInput
    update?: XOR<XOR<ComputerUpdateToOneWithWhereWithoutEmployeInput, ComputerUpdateWithoutEmployeInput>, ComputerUncheckedUpdateWithoutEmployeInput>
  }

  export type EmployeCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeCreateWithoutUserInput, EmployeUncheckedCreateWithoutUserInput> | EmployeCreateWithoutUserInput[] | EmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutUserInput | EmployeCreateOrConnectWithoutUserInput[]
    createMany?: EmployeCreateManyUserInputEnvelope
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
  }

  export type ComputerCreateNestedManyWithoutUserInput = {
    create?: XOR<ComputerCreateWithoutUserInput, ComputerUncheckedCreateWithoutUserInput> | ComputerCreateWithoutUserInput[] | ComputerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComputerCreateOrConnectWithoutUserInput | ComputerCreateOrConnectWithoutUserInput[]
    createMany?: ComputerCreateManyUserInputEnvelope
    connect?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
  }

  export type EmployeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeCreateWithoutUserInput, EmployeUncheckedCreateWithoutUserInput> | EmployeCreateWithoutUserInput[] | EmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutUserInput | EmployeCreateOrConnectWithoutUserInput[]
    createMany?: EmployeCreateManyUserInputEnvelope
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
  }

  export type ComputerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComputerCreateWithoutUserInput, ComputerUncheckedCreateWithoutUserInput> | ComputerCreateWithoutUserInput[] | ComputerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComputerCreateOrConnectWithoutUserInput | ComputerCreateOrConnectWithoutUserInput[]
    createMany?: ComputerCreateManyUserInputEnvelope
    connect?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeCreateWithoutUserInput, EmployeUncheckedCreateWithoutUserInput> | EmployeCreateWithoutUserInput[] | EmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutUserInput | EmployeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeUpsertWithWhereUniqueWithoutUserInput | EmployeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeCreateManyUserInputEnvelope
    set?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    disconnect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    delete?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    update?: EmployeUpdateWithWhereUniqueWithoutUserInput | EmployeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeUpdateManyWithWhereWithoutUserInput | EmployeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
  }

  export type ComputerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComputerCreateWithoutUserInput, ComputerUncheckedCreateWithoutUserInput> | ComputerCreateWithoutUserInput[] | ComputerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComputerCreateOrConnectWithoutUserInput | ComputerCreateOrConnectWithoutUserInput[]
    upsert?: ComputerUpsertWithWhereUniqueWithoutUserInput | ComputerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComputerCreateManyUserInputEnvelope
    set?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    disconnect?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    delete?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    connect?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    update?: ComputerUpdateWithWhereUniqueWithoutUserInput | ComputerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComputerUpdateManyWithWhereWithoutUserInput | ComputerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComputerScalarWhereInput | ComputerScalarWhereInput[]
  }

  export type EmployeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeCreateWithoutUserInput, EmployeUncheckedCreateWithoutUserInput> | EmployeCreateWithoutUserInput[] | EmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutUserInput | EmployeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeUpsertWithWhereUniqueWithoutUserInput | EmployeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeCreateManyUserInputEnvelope
    set?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    disconnect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    delete?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    update?: EmployeUpdateWithWhereUniqueWithoutUserInput | EmployeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeUpdateManyWithWhereWithoutUserInput | EmployeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
  }

  export type ComputerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComputerCreateWithoutUserInput, ComputerUncheckedCreateWithoutUserInput> | ComputerCreateWithoutUserInput[] | ComputerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComputerCreateOrConnectWithoutUserInput | ComputerCreateOrConnectWithoutUserInput[]
    upsert?: ComputerUpsertWithWhereUniqueWithoutUserInput | ComputerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComputerCreateManyUserInputEnvelope
    set?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    disconnect?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    delete?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    connect?: ComputerWhereUniqueInput | ComputerWhereUniqueInput[]
    update?: ComputerUpdateWithWhereUniqueWithoutUserInput | ComputerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComputerUpdateManyWithWhereWithoutUserInput | ComputerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComputerScalarWhereInput | ComputerScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutComputersInput = {
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
    employes?: EmployeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutComputersInput = {
    id?: number
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
    employes?: EmployeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutComputersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComputersInput, UserUncheckedCreateWithoutComputersInput>
  }

  export type EmployeCreateWithoutComputerInput = {
    lastName: string
    firstName: string
    mail: string
    password: string
    user: UserCreateNestedOneWithoutEmployesInput
  }

  export type EmployeUncheckedCreateWithoutComputerInput = {
    id?: number
    lastName: string
    firstName: string
    mail: string
    password: string
    companyId: number
  }

  export type EmployeCreateOrConnectWithoutComputerInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutComputerInput, EmployeUncheckedCreateWithoutComputerInput>
  }

  export type UserUpsertWithoutComputersInput = {
    update: XOR<UserUpdateWithoutComputersInput, UserUncheckedUpdateWithoutComputersInput>
    create: XOR<UserCreateWithoutComputersInput, UserUncheckedCreateWithoutComputersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComputersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComputersInput, UserUncheckedUpdateWithoutComputersInput>
  }

  export type UserUpdateWithoutComputersInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: EmployeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutComputersInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: EmployeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeUpsertWithoutComputerInput = {
    update: XOR<EmployeUpdateWithoutComputerInput, EmployeUncheckedUpdateWithoutComputerInput>
    create: XOR<EmployeCreateWithoutComputerInput, EmployeUncheckedCreateWithoutComputerInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutComputerInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutComputerInput, EmployeUncheckedUpdateWithoutComputerInput>
  }

  export type EmployeUpdateWithoutComputerInput = {
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEmployesNestedInput
  }

  export type EmployeUncheckedUpdateWithoutComputerInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutEmployesInput = {
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
    computers?: ComputerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployesInput = {
    id?: number
    companyName: string
    siretNumber: string
    password: string
    directorName?: string | null
    computers?: ComputerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployesInput, UserUncheckedCreateWithoutEmployesInput>
  }

  export type ComputerCreateWithoutEmployeInput = {
    adresseMac: string
    user: UserCreateNestedOneWithoutComputersInput
  }

  export type ComputerUncheckedCreateWithoutEmployeInput = {
    id?: number
    adresseMac: string
    companyId: number
  }

  export type ComputerCreateOrConnectWithoutEmployeInput = {
    where: ComputerWhereUniqueInput
    create: XOR<ComputerCreateWithoutEmployeInput, ComputerUncheckedCreateWithoutEmployeInput>
  }

  export type UserUpsertWithoutEmployesInput = {
    update: XOR<UserUpdateWithoutEmployesInput, UserUncheckedUpdateWithoutEmployesInput>
    create: XOR<UserCreateWithoutEmployesInput, UserUncheckedCreateWithoutEmployesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployesInput, UserUncheckedUpdateWithoutEmployesInput>
  }

  export type UserUpdateWithoutEmployesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
    computers?: ComputerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployesInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    siretNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    directorName?: NullableStringFieldUpdateOperationsInput | string | null
    computers?: ComputerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ComputerUpsertWithoutEmployeInput = {
    update: XOR<ComputerUpdateWithoutEmployeInput, ComputerUncheckedUpdateWithoutEmployeInput>
    create: XOR<ComputerCreateWithoutEmployeInput, ComputerUncheckedCreateWithoutEmployeInput>
    where?: ComputerWhereInput
  }

  export type ComputerUpdateToOneWithWhereWithoutEmployeInput = {
    where?: ComputerWhereInput
    data: XOR<ComputerUpdateWithoutEmployeInput, ComputerUncheckedUpdateWithoutEmployeInput>
  }

  export type ComputerUpdateWithoutEmployeInput = {
    adresseMac?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutComputersNestedInput
  }

  export type ComputerUncheckedUpdateWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    adresseMac?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeCreateWithoutUserInput = {
    lastName: string
    firstName: string
    mail: string
    password: string
    computer?: ComputerCreateNestedOneWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutUserInput = {
    id?: number
    lastName: string
    firstName: string
    mail: string
    password: string
    computer?: ComputerUncheckedCreateNestedOneWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutUserInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutUserInput, EmployeUncheckedCreateWithoutUserInput>
  }

  export type EmployeCreateManyUserInputEnvelope = {
    data: EmployeCreateManyUserInput | EmployeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComputerCreateWithoutUserInput = {
    adresseMac: string
    employe?: EmployeCreateNestedOneWithoutComputerInput
  }

  export type ComputerUncheckedCreateWithoutUserInput = {
    id?: number
    adresseMac: string
    employeId?: number | null
  }

  export type ComputerCreateOrConnectWithoutUserInput = {
    where: ComputerWhereUniqueInput
    create: XOR<ComputerCreateWithoutUserInput, ComputerUncheckedCreateWithoutUserInput>
  }

  export type ComputerCreateManyUserInputEnvelope = {
    data: ComputerCreateManyUserInput | ComputerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeWhereUniqueInput
    update: XOR<EmployeUpdateWithoutUserInput, EmployeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeCreateWithoutUserInput, EmployeUncheckedCreateWithoutUserInput>
  }

  export type EmployeUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeWhereUniqueInput
    data: XOR<EmployeUpdateWithoutUserInput, EmployeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeUpdateManyWithWhereWithoutUserInput = {
    where: EmployeScalarWhereInput
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeScalarWhereInput = {
    AND?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
    OR?: EmployeScalarWhereInput[]
    NOT?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
    id?: IntFilter<"Employe"> | number
    lastName?: StringFilter<"Employe"> | string
    firstName?: StringFilter<"Employe"> | string
    mail?: StringFilter<"Employe"> | string
    password?: StringFilter<"Employe"> | string
    companyId?: IntFilter<"Employe"> | number
  }

  export type ComputerUpsertWithWhereUniqueWithoutUserInput = {
    where: ComputerWhereUniqueInput
    update: XOR<ComputerUpdateWithoutUserInput, ComputerUncheckedUpdateWithoutUserInput>
    create: XOR<ComputerCreateWithoutUserInput, ComputerUncheckedCreateWithoutUserInput>
  }

  export type ComputerUpdateWithWhereUniqueWithoutUserInput = {
    where: ComputerWhereUniqueInput
    data: XOR<ComputerUpdateWithoutUserInput, ComputerUncheckedUpdateWithoutUserInput>
  }

  export type ComputerUpdateManyWithWhereWithoutUserInput = {
    where: ComputerScalarWhereInput
    data: XOR<ComputerUpdateManyMutationInput, ComputerUncheckedUpdateManyWithoutUserInput>
  }

  export type ComputerScalarWhereInput = {
    AND?: ComputerScalarWhereInput | ComputerScalarWhereInput[]
    OR?: ComputerScalarWhereInput[]
    NOT?: ComputerScalarWhereInput | ComputerScalarWhereInput[]
    id?: IntFilter<"Computer"> | number
    adresseMac?: StringFilter<"Computer"> | string
    companyId?: IntFilter<"Computer"> | number
    employeId?: IntNullableFilter<"Computer"> | number | null
  }

  export type EmployeCreateManyUserInput = {
    id?: number
    lastName: string
    firstName: string
    mail: string
    password: string
  }

  export type ComputerCreateManyUserInput = {
    id?: number
    adresseMac: string
    employeId?: number | null
  }

  export type EmployeUpdateWithoutUserInput = {
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    computer?: ComputerUpdateOneWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    computer?: ComputerUncheckedUpdateOneWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ComputerUpdateWithoutUserInput = {
    adresseMac?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneWithoutComputerNestedInput
  }

  export type ComputerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adresseMac?: StringFieldUpdateOperationsInput | string
    employeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComputerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adresseMac?: StringFieldUpdateOperationsInput | string
    employeId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}