import { EntityTarget } from "./EntityTarget";
import { ObjectType } from "./ObjectType";
import { EntitySchema } from "..";

/**
 * Test suite for EntityTarget type.
 */
describe('EntityTarget Type', () => {
    
    // Happy Path Test Case
    it('should accept an ObjectType<Entity>', () => {
        // Step 1: Create a mock ObjectType
        const mockObjectType: ObjectType<any> = {} as ObjectType<any>;
        // Step 2: Assign it to EntityTarget
        const entityTarget: EntityTarget<any> = mockObjectType;
        // Step 3: Assert that it is of type ObjectType
        expect(entityTarget).toBe(mockObjectType);
    });

    // Happy Path Test Case
    it('should accept an EntitySchema<Entity>', () => {
        // Step 1: Create a mock EntitySchema
        const mockEntitySchema: EntitySchema<any> = {} as EntitySchema<any>;
        // Step 2: Assign it to EntityTarget
        const entityTarget: EntityTarget<any> = mockEntitySchema;
        // Step 3: Assert that it is of type EntitySchema
        expect(entityTarget).toBe(mockEntitySchema);
    });

    // Happy Path Test Case
    it('should accept a string', () => {
        // Step 1: Create a string value
        const stringValue = "testEntity";
        // Step 2: Assign it to EntityTarget
        const entityTarget: EntityTarget<any> = stringValue;
        // Step 3: Assert that it is a string
        expect(entityTarget).toBe(stringValue);
    });

    // Happy Path Test Case
    it('should accept an object with type and name properties', () => {
        // Step 1: Create an object with type and name
        const entityObject = { type: {}, name: "testEntity" };
        // Step 2: Assign it to EntityTarget
        const entityTarget: EntityTarget<any> = entityObject;
        // Step 3: Assert that it is the same object
        expect(entityTarget).toBe(entityObject);
    });

    // Negative Case Test Case
    it('should not accept a number', () => {
        // Step 1: Create a number value
        const numberValue = 123;
        // Step 2: Try to assign it to EntityTarget
        const entityTarget: EntityTarget<any> = numberValue;
        // Step 3: Assert that it is not a valid EntityTarget
        expect(typeof entityTarget).not.toBe('number');
    });

    // Corner Case Test Case
    it('should handle an empty object', () => {
        // Step 1: Create an empty object
        const emptyObject = {};
        // Step 2: Assign it to EntityTarget
        const entityTarget: EntityTarget<any> = emptyObject;
        // Step 3: Assert that it is an empty object
        expect(entityTarget).toBe(emptyObject);
    });
});
