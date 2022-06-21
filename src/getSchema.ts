import { IntegrationEntitySchema, IntegrationSchema } from '.';

export function getSchema(_type: string): IntegrationEntitySchema | undefined {
  const validate = IntegrationSchema.getSchema("#" + _type);
  if (!validate) {
    return undefined;
  }

  return validate.schema as IntegrationEntitySchema;
}
