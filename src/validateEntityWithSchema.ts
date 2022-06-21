import { IntegrationSchema } from ".";

/**
 * Validates an entity using the data model schemas, throwing an error when
 * validation fails.
 */
export function validateEntityWithSchema(entity: { _type: string }): void {
    const validate = IntegrationSchema.getSchema(`#${entity._type}`);
    if (!validate) {
      throw new Error(`Could not find schema for type ${entity._type}!`);
    }

    if (!validate(entity)) {
      throw new Error(
        `Entity fails to validate as type :\n\n${JSON.stringify(
          validate.errors,
          null,
          2,
        )}`,
      );
  }
}
