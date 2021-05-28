/**
 * Standardized values for relationship `_class`.
 */
export enum RelationshipClass {
  /**
   * A relationship between an {AccessPolicy, Firewall} and a resource Entity.
   */
  ALLOWS = 'ALLOWS',

  /**
   * A relationship between a User and a PR.
   */
  APPROVED = 'APPROVED',

  /**
   * A relationship between a {AccessRole, User, Group} and AccessPolicy.
   */
  ASSIGNED = 'ASSIGNED',

  /**
   * A relationship indicating general connectivity between two entities.
   *
   * Examples:
   *
   * - Load Balancer -> CONNECTS -> Instance
   * - Gateway -> CONNECTS -> Internet
   * - Content Distribution -> CONNECTS -> Gateway
   */
  CONNECTS = 'CONNECTS',

  /**
   * A relationship indicating an Entity contains another Entity.
   *
   * Examples:
   *
   * - Network - CONTAINS -> Network (a subnet)
   * - Network - CONTAINS -> Host
   * - Cluster - CONTAINS -> Host
   * - UserGroup - CONTAINS -> User
   *
   * @see HAS
   */
  CONTAINS = 'CONTAINS',

  /**
   * A relationship between a User and any Entity.
   */
  CREATED = 'CREATED',

  /**
   * A relationship between a CodeRepo and Function.
   */
  DEFINES = 'DEFINES',

  /**
   * A relationship between an {AccessPolicy, Firewall} and a resource Entity.
   */
  DENIES = 'DENIES',

  DEPLOYED = 'DEPLOYED',

  /**
   * A relationship between a {Vulnerability, Finding} and Weakness.
   */
  EXPLOITS = 'EXPLOITS',

  EXTENDS = 'EXTENDS',

  /**
   * A relationship indicating an Entity is responsible for generating another Entity.
   *
   * Examples:
   *
   * * Project - GENERATED -> Finding
   */
  GENERATED = 'GENERATED',

  /**
   * A relationship indicating a possessive association between two Entities.
   * The direction of the relationship typically flows toward the possessed
   * Entity.
   *
   * Examples:
   *
   * - Account - HAS -> User
   * - Network - HAS -> AccessPolicy
   * - Network - HAS -> Firewall
   * - Finding - HAS -> ThreatIntel
   *
   * @see CONTAINS
   */
  HAS = 'HAS',

  /**
   * A relationship indicating an Entity identified another Entity.
   *
   * Examples:
   *
   * * Service - IDENTIFIED -> Finding
   */
  IDENTIFIED = 'IDENTIFIED',

  IMPLEMENTS = 'IMPLEMENTS',

  /**
   * A relationship indicating an Entity is an instance of another Entity.
   *
   * Examples:
   *
   * * Finding - IS -> Vulnerability
   * * User - IS -> Person
   */
  IS = 'IS',

  /**
   * A relationship indicating an Entity limits or restricts another Entity.
   *
   * Examples:
   *
   * * AccessPolicy - LIMITS -> User or Role
   */
  LIMITS = 'LIMITS',

  MANAGES = 'MANAGES',
  MITIGATES = 'MITIGATES',
  MONITORS = 'MONITORS',

  NOTIFIES = 'NOTIFIES',

  OPENED = 'OPENED',
  OWNS = 'OWNS',

  PERFORMED = 'PERFORMED',
  PROTECTS = 'PROTECTS',
  PROVIDES = 'PROVIDES',

  /**
   * A relationship indicating an Entity limits or restricts another Entity.
   */
  RESTRICTS = 'RESTRICTS',

  REVIEWED = 'REVIEWED',

  /**
   * A relationships indicating an Entity performs some kind of scan on another Entity.
   *
   * Examples:
   *
   * * Service - SCANS -> Host
   */
  SCANS = 'SCANS',

  /**
   * A relationship indicating an Entitiy triggers an event on another Entity
   *
   * Example:
   * - Gateway -> TRIGGERS -> Function
   * - Kinesis -> TRIGGERS -> Function
   * - Metric -> TRIGGERS -> Alarm
   * - IDS -> TRIGGERS -> Alarm
   *
   */
  TRIGGERS = 'TRIGGERS',

  TRUSTS = 'TRUSTS',

  /**
   * A relationship between a User and any Entity.
   */
  UPDATED = 'UPDATED',

  /**
   * A relationship indicating an Entity utilizes another Entity. Typically, the
   * target Entity can be "used" by many source Entities.
   *
   * Examples:
   *
   * * Host - USES -> DataStore
   * * UserRole - USES -> AccessPolicy
   */
  USES = 'USES',

  /**
   * A relationship indicating that a device has some kind of application
   * installed.
   *
   * Examples:
   *
   * Device - INSTALLED -> Application
   */
  INSTALLED = 'INSTALLED',
}
