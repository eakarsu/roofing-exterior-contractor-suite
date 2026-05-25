export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai3-d-spatial-server-db-schema-sql-ai-results",
    "sourceProject": "AI3DSpatial",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100) NOT NULL"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(200) NOT NULL"
      },
      {
        "name": "prompt",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt TEXT NOT NULL"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "parsed_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsed_json JSONB"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "prompt_tokens",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt_tokens INTEGER"
      },
      {
        "name": "completion_tokens",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completion_tokens INTEGER"
      },
      {
        "name": "total_tokens",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_tokens INTEGER"
      },
      {
        "name": "source_table",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_table VARCHAR(100)"
      },
      {
        "name": "source_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-animations",
    "sourceProject": "AI3DSpatial",
    "name": "animations",
    "displayName": "Animations",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "animation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "animation_type VARCHAR(100)"
      },
      {
        "name": "duration_seconds",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_seconds FLOAT"
      },
      {
        "name": "frame_rate",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frame_rate INTEGER"
      },
      {
        "name": "keyframes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "keyframes INTEGER"
      },
      {
        "name": "loop_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "loop_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ready'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ready'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-ar-scenes",
    "sourceProject": "AI3DSpatial",
    "name": "ar_scenes",
    "displayName": "Ar Scenes",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "scene_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scene_type VARCHAR(100)"
      },
      {
        "name": "target_platform",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_platform VARCHAR(100)"
      },
      {
        "name": "tracking_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_type VARCHAR(100)"
      },
      {
        "name": "objects_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "objects_count INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-asset-library",
    "sourceProject": "AI3DSpatial",
    "name": "asset_library",
    "displayName": "Asset Library",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(50)"
      },
      {
        "name": "poly_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "poly_count INTEGER"
      },
      {
        "name": "file_size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size VARCHAR(50)"
      },
      {
        "name": "license_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_type VARCHAR(100)"
      },
      {
        "name": "tags",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-asset-links",
    "sourceProject": "AI3DSpatial",
    "name": "asset_links",
    "displayName": "Asset Links",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "source_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_id INTEGER NOT NULL"
      },
      {
        "name": "target_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "target_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_id INTEGER NOT NULL"
      },
      {
        "name": "relationship",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'uses'",
        "sourceLine": "relationship VARCHAR(100) DEFAULT 'uses'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-digital-twins",
    "sourceProject": "AI3DSpatial",
    "name": "digital_twins",
    "displayName": "Digital Twins",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "twin_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "twin_type VARCHAR(100)"
      },
      {
        "name": "source_entity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_entity VARCHAR(255)"
      },
      {
        "name": "sync_frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sync_frequency VARCHAR(50)"
      },
      {
        "name": "sensors_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensors_count INTEGER"
      },
      {
        "name": "data_points",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data_points BIGINT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-ai-image-based-object-detection-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_image_based_object_detection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-ai-material-recommendation-use-case-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_material_recommendation_use_case.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-ai-neural-mesh-compression-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_neural_mesh_compression.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-ai-scene-reconstruction-nerf-gaussian-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_scene_reconstruction_nerf_gaussian.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-ai-spatial-mapping-live-camera-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_spatial_mapping_live_camera.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-ai-text-scene-generation-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_text_scene_generation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-fps-performance-profiling-tools-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_fps_performance_profiling_tools.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-global-illumination-lighting-simulation-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_global_illumination_lighting_simulation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-multi-user-real-time-collaborative-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_multi_user_real_time_collaborative.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-notifications-subsystem-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_notifications_subsystem.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-outbound-webhooks-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_outbound_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-routes-gap-physics-simulation-collision-gravity-js-gap-features",
    "sourceProject": "AI3DSpatial",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_physics_simulation_collision_gravity.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-holographic",
    "sourceProject": "AI3DSpatial",
    "name": "holographic",
    "displayName": "Holographic",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "hologram_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hologram_type VARCHAR(100)"
      },
      {
        "name": "display_tech",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_tech VARCHAR(100)"
      },
      {
        "name": "resolution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution VARCHAR(50)"
      },
      {
        "name": "depth_layers",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depth_layers INTEGER"
      },
      {
        "name": "interactive",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "interactive BOOLEAN DEFAULT false"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ready'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ready'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-materials",
    "sourceProject": "AI3DSpatial",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100)"
      },
      {
        "name": "shader_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shader_model VARCHAR(100)"
      },
      {
        "name": "render_engine",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "render_engine VARCHAR(100)"
      },
      {
        "name": "pbr_workflow",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pbr_workflow VARCHAR(50)"
      },
      {
        "name": "transparency",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "transparency BOOLEAN DEFAULT false"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ready'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ready'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-mesh-optimization",
    "sourceProject": "AI3DSpatial",
    "name": "mesh_optimization",
    "displayName": "Mesh Optimization",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "original_polygons",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_polygons INTEGER"
      },
      {
        "name": "optimized_polygons",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimized_polygons INTEGER"
      },
      {
        "name": "reduction_percent",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reduction_percent FLOAT"
      },
      {
        "name": "quality_score",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score FLOAT"
      },
      {
        "name": "algorithm",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "algorithm VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-models3d",
    "sourceProject": "AI3DSpatial",
    "name": "models3d",
    "displayName": "Models3d",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(50)"
      },
      {
        "name": "vertices",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vertices INTEGER"
      },
      {
        "name": "polygons",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "polygons INTEGER"
      },
      {
        "name": "file_size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ready'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ready'"
      },
      {
        "name": "thumbnail",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail VARCHAR(500)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-object-detection",
    "sourceProject": "AI3DSpatial",
    "name": "object_detection",
    "displayName": "Object Detection",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "detection_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_model VARCHAR(100)"
      },
      {
        "name": "objects_detected",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "objects_detected INTEGER"
      },
      {
        "name": "confidence_avg",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_avg FLOAT"
      },
      {
        "name": "processing_time",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processing_time VARCHAR(50)"
      },
      {
        "name": "input_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_type VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-point-clouds",
    "sourceProject": "AI3DSpatial",
    "name": "point_clouds",
    "displayName": "Point Clouds",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "point_count",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "point_count BIGINT"
      },
      {
        "name": "density",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "density VARCHAR(50)"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(100)"
      },
      {
        "name": "coordinate_system",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coordinate_system VARCHAR(100)"
      },
      {
        "name": "file_size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'processed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'processed'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-scene-generator",
    "sourceProject": "AI3DSpatial",
    "name": "scene_generator",
    "displayName": "Scene Generator",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "scene_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scene_type VARCHAR(100)"
      },
      {
        "name": "generation_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generation_model VARCHAR(100)"
      },
      {
        "name": "prompt_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt_text TEXT"
      },
      {
        "name": "objects_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "objects_count INTEGER"
      },
      {
        "name": "lighting_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lighting_type VARCHAR(100)"
      },
      {
        "name": "render_engine",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "render_engine VARCHAR(100)"
      },
      {
        "name": "output_format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_format VARCHAR(50)"
      },
      {
        "name": "resolution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution VARCHAR(50)"
      },
      {
        "name": "poly_budget",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "poly_budget INTEGER"
      },
      {
        "name": "generation_time",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generation_time VARCHAR(50)"
      },
      {
        "name": "quality_score",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score FLOAT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'generating'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'generating'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-scene-reconstruction",
    "sourceProject": "AI3DSpatial",
    "name": "scene_reconstruction",
    "displayName": "Scene Reconstruction",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "reconstruction_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reconstruction_type VARCHAR(100)"
      },
      {
        "name": "source_images",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_images INTEGER"
      },
      {
        "name": "mesh_quality",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mesh_quality VARCHAR(50)"
      },
      {
        "name": "texture_quality",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "texture_quality VARCHAR(50)"
      },
      {
        "name": "completeness_percent",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completeness_percent FLOAT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-spatial-audio",
    "sourceProject": "AI3DSpatial",
    "name": "spatial_audio",
    "displayName": "Spatial Audio",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "audio_format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "audio_format VARCHAR(100)"
      },
      {
        "name": "channels",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channels INTEGER"
      },
      {
        "name": "sample_rate",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sample_rate INTEGER"
      },
      {
        "name": "spatialization",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spatialization VARCHAR(100)"
      },
      {
        "name": "hrtf_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "hrtf_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "duration_seconds",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_seconds FLOAT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ready'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ready'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-spatial-mapping",
    "sourceProject": "AI3DSpatial",
    "name": "spatial_mapping",
    "displayName": "Spatial Mapping",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "area_sqm",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area_sqm FLOAT"
      },
      {
        "name": "resolution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution VARCHAR(50)"
      },
      {
        "name": "mapping_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mapping_type VARCHAR(100)"
      },
      {
        "name": "sensor_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensor_type VARCHAR(100)"
      },
      {
        "name": "accuracy",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accuracy VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'mapped'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'mapped'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-textures",
    "sourceProject": "AI3DSpatial",
    "name": "textures",
    "displayName": "Textures",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "texture_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "texture_type VARCHAR(100)"
      },
      {
        "name": "resolution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution VARCHAR(50)"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(50)"
      },
      {
        "name": "seamless",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "seamless BOOLEAN DEFAULT false"
      },
      {
        "name": "pbr_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "pbr_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ready'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ready'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-users",
    "sourceProject": "AI3DSpatial",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai3-d-spatial-server-db-schema-sql-vr-environments",
    "sourceProject": "AI3DSpatial",
    "name": "vr_environments",
    "displayName": "Vr Environments",
    "framework": "SQL",
    "sourceFile": "server/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "environment_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "environment_type VARCHAR(100)"
      },
      {
        "name": "platform",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "platform VARCHAR(100)"
      },
      {
        "name": "resolution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution VARCHAR(50)"
      },
      {
        "name": "fps_target",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fps_target INTEGER"
      },
      {
        "name": "interactive_elements",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "interactive_elements INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_prompt TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-ai-results",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "home_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "home_id         INTEGER REFERENCES homes(id) ON DELETE SET NULL"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint        VARCHAR(100) NOT NULL"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model           VARCHAR(100)"
      },
      {
        "name": "prompt_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt_summary  TEXT"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-assessments",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "assessments",
    "displayName": "Assessments",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "home_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "home_id         INTEGER NOT NULL REFERENCES homes(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "assessment_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'full'",
        "sourceLine": "assessment_type VARCHAR(50) NOT NULL DEFAULT 'full' CHECK (assessment_type IN ('full','bathroom','kitchen','entrance','bedroom'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','completed'))"
      },
      {
        "name": "ai_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_result       JSONB"
      },
      {
        "name": "safety_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "safety_score    INTEGER"
      },
      {
        "name": "urgency_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "urgency_level   VARCHAR(20) CHECK (urgency_level IN ('low','medium','high','critical'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-contractors",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "contractors",
    "displayName": "Contractors",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                          SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                        VARCHAR(255) NOT NULL"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty                   VARCHAR(100)"
      },
      {
        "name": "license_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_number              VARCHAR(100)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone                       VARCHAR(50)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email                       VARCHAR(255)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating                      DECIMAL(3, 2)"
      },
      {
        "name": "review_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "review_count                INTEGER DEFAULT 0"
      },
      {
        "name": "zip_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip_code                    VARCHAR(20)"
      },
      {
        "name": "is_certified_aging_specialist",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_certified_aging_specialist BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-cost-estimates",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "cost_estimates",
    "displayName": "Cost Estimates",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "modification_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modification_id INTEGER NOT NULL REFERENCES modifications(id) ON DELETE CASCADE"
      },
      {
        "name": "labor_cost",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_cost      INTEGER"
      },
      {
        "name": "materials_cost",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials_cost  INTEGER"
      },
      {
        "name": "timeline_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeline_days   INTEGER"
      },
      {
        "name": "roi_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roi_score       INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-fall-risk-history",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "fall_risk_history",
    "displayName": "Fall Risk History",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                    SERIAL PRIMARY KEY"
      },
      {
        "name": "home_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "home_id               INTEGER NOT NULL REFERENCES homes(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "fall_risk_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fall_risk_score       INTEGER"
      },
      {
        "name": "risk_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_category         VARCHAR(20)"
      },
      {
        "name": "annual_fall_probability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_fall_probability DECIMAL(5,4)"
      },
      {
        "name": "ai_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_result             JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-ai-accessibility-score-generation-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_accessibility_score_generation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-ai-contractor-matching-skill-plus-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_contractor_matching_skill_plus.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-ai-cost-estimation-pipeline-material-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_cost_estimation_pipeline_material.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-ai-roi-modeling-cost-vs-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_roi_modeling_cost_vs.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-contractor-collaboration-shared-quote-review-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_contractor_collaboration_shared_quote_review.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-insurance-claim-documentation-guidance-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_insurance_claim_documentation_guidance.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-limited-ai-fall-risk-prediction-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_limited_ai_fall_risk_prediction.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-notifications-subsystem-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_notifications_subsystem.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-outbound-webhooks-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_outbound_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-photo-upload-image-based-home-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_photo_upload_image_based_home.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-routes-gap-post-modification-follow-up-effectiveness-js-gap-features",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_post_modification_follow_up_effectiveness.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-homes",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "homes",
    "displayName": "Homes",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                          SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id                     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address                     TEXT NOT NULL"
      },
      {
        "name": "year_built",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year_built                  INTEGER"
      },
      {
        "name": "sq_footage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sq_footage                  INTEGER"
      },
      {
        "name": "num_floors",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "num_floors                  INTEGER DEFAULT 1"
      },
      {
        "name": "current_accessibility_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_accessibility_score INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-modifications",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "modifications",
    "displayName": "Modifications",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "assessment_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessment_id       INTEGER NOT NULL REFERENCES assessments(id) ON DELETE CASCADE"
      },
      {
        "name": "room",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room                VARCHAR(100)"
      },
      {
        "name": "modification_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modification_type   VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description         TEXT"
      },
      {
        "name": "estimated_cost_min",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost_min  INTEGER"
      },
      {
        "name": "estimated_cost_max",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost_max  INTEGER"
      },
      {
        "name": "priority",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "priority            INTEGER DEFAULT 5"
      },
      {
        "name": "aging_benefit",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aging_benefit       TEXT"
      },
      {
        "name": "ai_reasoning",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_reasoning        TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'recommended'",
        "sourceLine": "status              VARCHAR(20) NOT NULL DEFAULT 'recommended' CHECK (status IN ('recommended','planned','in_progress','completed'))"
      },
      {
        "name": "contractor_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor_id       INTEGER REFERENCES contractors(id) ON DELETE SET NULL"
      },
      {
        "name": "completion_pct",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "completion_pct      INTEGER DEFAULT 0"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date          DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date            DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-quotes",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "quotes",
    "displayName": "Quotes",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "modification_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modification_id INTEGER NOT NULL REFERENCES modifications(id) ON DELETE CASCADE"
      },
      {
        "name": "contractor_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor_id   INTEGER NOT NULL REFERENCES contractors(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','received','accepted','rejected'))"
      },
      {
        "name": "quote_amount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote_amount    INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "requested_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "requested_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "responded_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responded_at    TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-resident-profiles",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "resident_profiles",
    "displayName": "Resident Profiles",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "home_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "home_id         INTEGER NOT NULL REFERENCES homes(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "resident_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resident_name   VARCHAR(255)"
      },
      {
        "name": "age",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age             INTEGER"
      },
      {
        "name": "mobility_issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mobility_issues TEXT"
      },
      {
        "name": "vision_issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vision_issues   TEXT"
      },
      {
        "name": "balance_issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "balance_issues  TEXT"
      },
      {
        "name": "medical_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "medical_notes   TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aging-in-place-home-modification-assessor-backend-db-js-users",
    "sourceProject": "AIAgingInPlaceHomeModificationAssessor",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email        VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name         VARCHAR(255) NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone        VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-ai-analyses",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100)"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "output_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_data JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-ai-analyses",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE SET NULL"
      },
      {
        "name": "bid_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_id INTEGER REFERENCES bids(id) ON DELETE SET NULL"
      },
      {
        "name": "input_data_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json JSONB"
      },
      {
        "name": "result_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-bid-comparisons",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "bid_comparisons",
    "displayName": "Bid Comparisons",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "bid_ids",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_ids JSONB"
      },
      {
        "name": "comparison_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comparison_notes TEXT"
      },
      {
        "name": "recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-bid-comparisons",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "bid_comparisons",
    "displayName": "Bid Comparisons",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "comparison_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comparison_data JSONB"
      },
      {
        "name": "recommended_bid_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommended_bid_id INTEGER REFERENCES bids(id)"
      },
      {
        "name": "analysis_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_summary TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-bids",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "bids",
    "displayName": "Bids",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "bid_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_amount DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "contractor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor_name VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'submitted'"
      },
      {
        "name": "submission_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submission_date DATE"
      },
      {
        "name": "scope",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-bids",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "bids",
    "displayName": "Bids",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "contractor_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor_id INTEGER REFERENCES contractors(id)"
      },
      {
        "name": "bid_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_amount DECIMAL(15,2)"
      },
      {
        "name": "contractor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor_name VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'submitted'"
      },
      {
        "name": "submission_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submission_date DATE"
      },
      {
        "name": "scope",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-change-orders",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "change_orders",
    "displayName": "Change Orders",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "impact_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "impact_days INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-change-orders",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "change_orders",
    "displayName": "Change Orders",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "cost_impact",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_impact DECIMAL(12,2)"
      },
      {
        "name": "schedule_impact_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule_impact_days INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(255)"
      },
      {
        "name": "approved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-compliance",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "compliance",
    "displayName": "Compliance",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "compliance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_type VARCHAR(100)"
      },
      {
        "name": "regulation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "responsible_party",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responsible_party VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-compliance-checks",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "compliance_checks",
    "displayName": "Compliance Checks",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "regulation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "checked_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "checked_by VARCHAR(255)"
      },
      {
        "name": "check_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "check_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-contractors",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "contractors",
    "displayName": "Contractors",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(255)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "license_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_number VARCHAR(100)"
      },
      {
        "name": "years_experience",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "years_experience INTEGER"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-contractors",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "contractors",
    "displayName": "Contractors",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "license_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_number VARCHAR(100)"
      },
      {
        "name": "license_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_expiry DATE"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(255)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-cost-estimates",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "cost_estimates",
    "displayName": "Cost Estimates",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "estimated_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_amount DECIMAL(15,2)"
      },
      {
        "name": "actual_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "actual_amount DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "variance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "variance DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-cost-estimates",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "cost_estimates",
    "displayName": "Cost Estimates",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "line_item",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "line_item VARCHAR(255)"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(10,2)"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "contingency_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contingency_pct DECIMAL(5,2)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-documents",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "file_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url VARCHAR(500)"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-documents",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "file_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url VARCHAR(500)"
      },
      {
        "name": "file_size",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size INTEGER"
      },
      {
        "name": "mime_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mime_type VARCHAR(100)"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "ai_extracted_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_extracted_text TEXT"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-contractors-subcontractors-lack-ai-scoring-or-performance-pr-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_contractors_subcontractors_lack_ai_scoring_or_performance_pr.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-limited-mobile-field-app-surfaces-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_limited_mobile_field_app_surfaces.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-no-agentic-bid-negotiation-flow-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_agentic_bid_negotiation_flow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-no-calendar-integration-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_calendar_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-no-equipment-rental-marketplace-or-availability-tracker-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_equipment_rental_marketplace_or_availability_tracker.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-no-photo-site-vision-ai-for-progress-or-safety-inspection-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_photo_site_vision_ai_for_progress_or_safety_inspection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-no-rfq-automation-or-vendor-outreach-workflow-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_rfq_automation_or_vendor_outreach_workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-routes-gap-no-supplier-directory-vendor-management-portal-js-gap-features",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_supplier_directory_vendor_management_portal.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-labor",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "labor",
    "displayName": "Labor",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "trade",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trade VARCHAR(100)"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(8,2)"
      },
      {
        "name": "hours_estimated",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_estimated DECIMAL(8,2)"
      },
      {
        "name": "hours_actual",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_actual DECIMAL(8,2)"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-labor-costs",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "labor_costs",
    "displayName": "Labor Costs",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(255) NOT NULL"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(10,2)"
      },
      {
        "name": "overtime_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overtime_rate DECIMAL(10,2)"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "estimated_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_hours DECIMAL(10,2)"
      },
      {
        "name": "actual_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "actual_hours DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-materials",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(10,2)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "in_stock",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "in_stock BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-materials",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(10,2)"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity DECIMAL(10,2)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-projects",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "projects",
    "displayName": "Projects",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planning'"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "project_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_type VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-projects",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "projects",
    "displayName": "Projects",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planning'"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "project_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_type VARCHAR(100)"
      },
      {
        "name": "last_analysis_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_analysis_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-risk-assessments",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "risk_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_type VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "likelihood",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "likelihood VARCHAR(50)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "mitigation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'identified'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'identified'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-risk-assessments",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "risk_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_category VARCHAR(100)"
      },
      {
        "name": "risk_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_description TEXT"
      },
      {
        "name": "probability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability VARCHAR(50)"
      },
      {
        "name": "impact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact VARCHAR(50)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "mitigation_strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_strategy TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-subcontractors",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "subcontractors",
    "displayName": "Subcontractors",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(255)"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(10,2)"
      },
      {
        "name": "availability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "availability VARCHAR(50) DEFAULT 'available'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-subcontractors",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "subcontractors",
    "displayName": "Subcontractors",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(255)"
      },
      {
        "name": "quote_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote_amount DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "license_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_number VARCHAR(100)"
      },
      {
        "name": "insurance_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "insurance_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-timelines",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "timelines",
    "displayName": "Timelines",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase VARCHAR(255) NOT NULL"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_started'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'not_started'"
      },
      {
        "name": "dependencies",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dependencies TEXT"
      },
      {
        "name": "progress_percent",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "progress_percent INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-timelines",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "timelines",
    "displayName": "Timelines",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE"
      },
      {
        "name": "phase_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase_name VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "duration_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_days INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "milestones",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "milestones JSONB"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-seed-js-users",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-bid-analyzer-server-migrations-001-schema-sql-users",
    "sourceProject": "AIConstructionBidAnalyzer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-bim",
    "sourceProject": "AIConstructionManager",
    "name": "bim",
    "displayName": "Bim",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "model_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_name VARCHAR(255)"
      },
      {
        "name": "discipline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discipline VARCHAR(100)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version VARCHAR(50)"
      },
      {
        "name": "clash_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "clash_count INTEGER DEFAULT 0"
      },
      {
        "name": "resolved_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "resolved_count INTEGER DEFAULT 0"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "software",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "software VARCHAR(100)"
      },
      {
        "name": "lod_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lod_level VARCHAR(50)"
      },
      {
        "name": "file_size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size VARCHAR(50)"
      },
      {
        "name": "last_updated",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_updated DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-bim-models",
    "sourceProject": "AIConstructionManager",
    "name": "bim_models",
    "displayName": "Bim Models",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "model_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_name VARCHAR(255)"
      },
      {
        "name": "discipline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discipline VARCHAR(100)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version VARCHAR(20)"
      },
      {
        "name": "clash_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clash_count INTEGER"
      },
      {
        "name": "resolved_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_count INTEGER"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "software",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "software VARCHAR(100)"
      },
      {
        "name": "lod_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lod_level VARCHAR(50)"
      },
      {
        "name": "file_size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size VARCHAR(50)"
      },
      {
        "name": "last_updated",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_updated DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'In",
        "sourceLine": "status VARCHAR(50) DEFAULT 'In Progress'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-budgets",
    "sourceProject": "AIConstructionManager",
    "name": "budgets",
    "displayName": "Budgets",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "allocated_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allocated_amount DECIMAL(15,2)"
      },
      {
        "name": "spent_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spent_amount DECIMAL(15,2)"
      },
      {
        "name": "remaining",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "remaining DECIMAL(15,2)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-budgets",
    "sourceProject": "AIConstructionManager",
    "name": "budgets",
    "displayName": "Budgets",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "allocated_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allocated_amount DECIMAL(15,2)"
      },
      {
        "name": "spent_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spent_amount DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "remaining",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "remaining DECIMAL(15,2)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-change-orders",
    "sourceProject": "AIConstructionManager",
    "name": "change_orders",
    "displayName": "Change Orders",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "cost_impact",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_impact DECIMAL(15,2)"
      },
      {
        "name": "schedule_impact_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule_impact_days INTEGER"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'Medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-change-orders",
    "sourceProject": "AIConstructionManager",
    "name": "change_orders",
    "displayName": "Change Orders",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "cost_impact",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cost_impact DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "schedule_impact_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "schedule_impact_days INTEGER DEFAULT 0"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'submitted'"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-contracts",
    "sourceProject": "AIConstructionManager",
    "name": "contracts",
    "displayName": "Contracts",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "contract_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_number VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "contractor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor VARCHAR(255)"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_type VARCHAR(100)"
      },
      {
        "name": "original_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_value DECIMAL(15,2)"
      },
      {
        "name": "revised_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revised_value DECIMAL(15,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "retainage_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retainage_pct DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "signed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signed_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-contracts",
    "sourceProject": "AIConstructionManager",
    "name": "contracts",
    "displayName": "Contracts",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "contract_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_number VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "contractor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractor VARCHAR(255)"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_type VARCHAR(100)"
      },
      {
        "name": "original_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_value DECIMAL(15,2)"
      },
      {
        "name": "revised_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revised_value DECIMAL(15,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "retainage_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "retainage_pct DECIMAL(5,2) DEFAULT 10"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "signed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signed_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-cost-estimations",
    "sourceProject": "AIConstructionManager",
    "name": "cost_estimations",
    "displayName": "Cost Estimations",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(15,2)"
      },
      {
        "name": "actual_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_cost DECIMAL(15,2)"
      },
      {
        "name": "variance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Draft'"
      },
      {
        "name": "estimator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimator VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-cost-estimations",
    "sourceProject": "AIConstructionManager",
    "name": "cost_estimations",
    "displayName": "Cost Estimations",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(15,2)"
      },
      {
        "name": "actual_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_cost DECIMAL(15,2)"
      },
      {
        "name": "variance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "estimator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimator VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-daily-reports",
    "sourceProject": "AIConstructionManager",
    "name": "daily_reports",
    "displayName": "Daily Reports",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "weather",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather VARCHAR(100)"
      },
      {
        "name": "crew_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_count INTEGER"
      },
      {
        "name": "work_completed",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_completed TEXT"
      },
      {
        "name": "issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issues TEXT"
      },
      {
        "name": "materials_used",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials_used TEXT"
      },
      {
        "name": "visitor_log",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_log TEXT"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-daily-reports",
    "sourceProject": "AIConstructionManager",
    "name": "daily_reports",
    "displayName": "Daily Reports",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "weather",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather VARCHAR(100)"
      },
      {
        "name": "crew_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_count INTEGER"
      },
      {
        "name": "work_completed",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_completed TEXT"
      },
      {
        "name": "issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issues TEXT"
      },
      {
        "name": "materials_used",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials_used TEXT"
      },
      {
        "name": "visitor_log",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_log TEXT"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-documents",
    "sourceProject": "AIConstructionManager",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Current'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Current'"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "tags",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-documents",
    "sourceProject": "AIConstructionManager",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "tags",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-environmental",
    "sourceProject": "AIConstructionManager",
    "name": "environmental",
    "displayName": "Environmental",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "compliance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_type VARCHAR(100)"
      },
      {
        "name": "regulation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "monitoring_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monitoring_date DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(100)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "deadline",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deadline DATE"
      },
      {
        "name": "agency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agency VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-environmental-compliance",
    "sourceProject": "AIConstructionManager",
    "name": "environmental_compliance",
    "displayName": "Environmental Compliance",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "compliance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_type VARCHAR(100)"
      },
      {
        "name": "regulation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "monitoring_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monitoring_date DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "deadline",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deadline DATE"
      },
      {
        "name": "agency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agency VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-equipment",
    "sourceProject": "AIConstructionManager",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "daily_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "daily_rate DECIMAL(10,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Available'"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator VARCHAR(255)"
      },
      {
        "name": "condition_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition_rating VARCHAR(50)"
      },
      {
        "name": "next_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-equipment",
    "sourceProject": "AIConstructionManager",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "daily_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "daily_rate DECIMAL(10,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available'"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator VARCHAR(255)"
      },
      {
        "name": "condition_rating",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition_rating INTEGER CHECK (condition_rating BETWEEN 1 AND 10)"
      },
      {
        "name": "next_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-equipment-permits-submittals-warranties-lack-paired-ai-endpo-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_equipment_permits_submittals_warranties_lack_paired_ai_endpo.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-meetingminutes-lacks-summarization-or-action-item-extraction-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_meetingminutes_lacks_summarization_or_action_item_extraction.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-no-field-worker-mobile-app-or-real-time-gps-tracking-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_field_worker_mobile_app_or_real_time_gps_tracking.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-no-payment-accounting-module-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_payment_accounting_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-no-supplier-vendor-sourcing-workflow-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_supplier_vendor_sourcing_workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-no-third-party-trimble-procore-revit-integrations-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_third_party_trimble_procore_revit_integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-no-webhooks-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-progressphotos-lacks-vision-based-photo-analysis-delay-quali-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_progressphotos_lacks_vision_based_photo_analysis_delay_quali.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-routes-gap-punchlist-lacks-ai-prioritization-or-closeout-timeline-predi-js-gap-features",
    "sourceProject": "AIConstructionManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_punchlist_lacks_ai_prioritization_or_closeout_timeline_predi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-inspections",
    "sourceProject": "AIConstructionManager",
    "name": "inspections",
    "displayName": "Inspections",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "date_scheduled",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_scheduled DATE"
      },
      {
        "name": "date_completed",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_completed DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Scheduled'"
      },
      {
        "name": "follow_up_required",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'No'",
        "sourceLine": "follow_up_required VARCHAR(10) DEFAULT 'No'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-inspections",
    "sourceProject": "AIConstructionManager",
    "name": "inspections",
    "displayName": "Inspections",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "date_scheduled",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_scheduled DATE"
      },
      {
        "name": "date_completed",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_completed DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "follow_up_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "follow_up_required BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-labor",
    "sourceProject": "AIConstructionManager",
    "name": "labor",
    "displayName": "Labor",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(10,2)"
      },
      {
        "name": "hours_worked",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_worked DECIMAL(10,2)"
      },
      {
        "name": "total_pay",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_pay DECIMAL(15,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "skills",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-labor",
    "sourceProject": "AIConstructionManager",
    "name": "labor",
    "displayName": "Labor",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(8,2)"
      },
      {
        "name": "hours_worked",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_worked DECIMAL(8,2)"
      },
      {
        "name": "total_pay",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_pay DECIMAL(12,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "skills",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-materials",
    "sourceProject": "AIConstructionManager",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(10,2)"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(15,2)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Ordered'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Ordered'"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-materials",
    "sourceProject": "AIConstructionManager",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(10,2)"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ordered'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'ordered'"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-meeting-minutes",
    "sourceProject": "AIConstructionManager",
    "name": "meeting_minutes",
    "displayName": "Meeting Minutes",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "meeting_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meeting_type VARCHAR(100)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "attendees",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attendees TEXT"
      },
      {
        "name": "agenda",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agenda TEXT"
      },
      {
        "name": "discussion",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discussion TEXT"
      },
      {
        "name": "action_items",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_items TEXT"
      },
      {
        "name": "decisions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decisions TEXT"
      },
      {
        "name": "next_meeting_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_meeting_date DATE"
      },
      {
        "name": "recorded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recorded_by VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-meeting-minutes",
    "sourceProject": "AIConstructionManager",
    "name": "meeting_minutes",
    "displayName": "Meeting Minutes",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "meeting_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meeting_type VARCHAR(100)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "attendees",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attendees TEXT"
      },
      {
        "name": "agenda",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agenda TEXT"
      },
      {
        "name": "discussion",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discussion TEXT"
      },
      {
        "name": "action_items",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_items TEXT"
      },
      {
        "name": "decisions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decisions TEXT"
      },
      {
        "name": "next_meeting_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_meeting_date DATE"
      },
      {
        "name": "recorded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recorded_by VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-permits",
    "sourceProject": "AIConstructionManager",
    "name": "permits",
    "displayName": "Permits",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "permit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permit_type VARCHAR(100)"
      },
      {
        "name": "issuing_authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuing_authority VARCHAR(255)"
      },
      {
        "name": "application_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "application_date DATE"
      },
      {
        "name": "approval_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approval_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost DECIMAL(10,2)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-permits",
    "sourceProject": "AIConstructionManager",
    "name": "permits",
    "displayName": "Permits",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "permit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permit_type VARCHAR(100)"
      },
      {
        "name": "issuing_authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuing_authority VARCHAR(255)"
      },
      {
        "name": "application_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "application_date DATE"
      },
      {
        "name": "approval_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approval_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost DECIMAL(10,2)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-progress-photos",
    "sourceProject": "AIConstructionManager",
    "name": "progress_photos",
    "displayName": "Progress Photos",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "date_taken",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_taken DATE"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase VARCHAR(100)"
      },
      {
        "name": "taken_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taken_by VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "weather_conditions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather_conditions VARCHAR(100)"
      },
      {
        "name": "tags",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags VARCHAR(255)"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Current'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Current'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-progress-photos",
    "sourceProject": "AIConstructionManager",
    "name": "progress_photos",
    "displayName": "Progress Photos",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "date_taken",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_taken DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase VARCHAR(100)"
      },
      {
        "name": "taken_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taken_by VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "weather_conditions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather_conditions VARCHAR(100)"
      },
      {
        "name": "tags",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-projects",
    "sourceProject": "AIConstructionManager",
    "name": "projects",
    "displayName": "Projects",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "client",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client VARCHAR(255)"
      },
      {
        "name": "manager",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manager VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-projects",
    "sourceProject": "AIConstructionManager",
    "name": "projects",
    "displayName": "Projects",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planning'"
      },
      {
        "name": "client",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client VARCHAR(255)"
      },
      {
        "name": "manager",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manager VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-punch-list",
    "sourceProject": "AIConstructionManager",
    "name": "punch_list",
    "displayName": "Punch List",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "item_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_number VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "date_identified",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_identified DATE"
      },
      {
        "name": "date_due",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_due DATE"
      },
      {
        "name": "date_completed",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_completed DATE"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'Medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-punch-list",
    "sourceProject": "AIConstructionManager",
    "name": "punch_list",
    "displayName": "Punch List",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "item_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_number VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "date_identified",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_identified DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "date_due",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_due DATE"
      },
      {
        "name": "date_completed",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_completed DATE"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-quality-control",
    "sourceProject": "AIConstructionManager",
    "name": "quality_control",
    "displayName": "Quality Control",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "inspection_area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_area VARCHAR(255)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "standard",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "standard VARCHAR(100)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "defects_found",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defects_found TEXT"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-quality-control",
    "sourceProject": "AIConstructionManager",
    "name": "quality_control",
    "displayName": "Quality Control",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "inspection_area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_area VARCHAR(255)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "standard",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "standard VARCHAR(255)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "defects_found",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defects_found TEXT"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-rfis",
    "sourceProject": "AIConstructionManager",
    "name": "rfis",
    "displayName": "Rfis",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "rfi_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rfi_number VARCHAR(50)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "question",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question TEXT"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "date_submitted",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_submitted DATE"
      },
      {
        "name": "date_due",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_due DATE"
      },
      {
        "name": "date_responded",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_responded DATE"
      },
      {
        "name": "response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'Medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "cost_impact",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_impact DECIMAL(15,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-rfis",
    "sourceProject": "AIConstructionManager",
    "name": "rfis",
    "displayName": "Rfis",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "rfi_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rfi_number VARCHAR(50)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "question",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question TEXT"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "date_submitted",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_submitted DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "date_due",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_due DATE"
      },
      {
        "name": "date_responded",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_responded DATE"
      },
      {
        "name": "response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "cost_impact",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_impact DECIMAL(10,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-risk-assessments",
    "sourceProject": "AIConstructionManager",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "risk_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "probability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability VARCHAR(50)"
      },
      {
        "name": "impact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact VARCHAR(50)"
      },
      {
        "name": "risk_score",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score VARCHAR(50)"
      },
      {
        "name": "mitigation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation TEXT"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-risk-assessments",
    "sourceProject": "AIConstructionManager",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "risk_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "probability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability VARCHAR(50)"
      },
      {
        "name": "impact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact VARCHAR(50)"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "mitigation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation TEXT"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-safety-incidents",
    "sourceProject": "AIConstructionManager",
    "name": "safety_incidents",
    "displayName": "Safety Incidents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "incident_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(255)"
      },
      {
        "name": "date_reported",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_reported DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-safety-incidents",
    "sourceProject": "AIConstructionManager",
    "name": "safety_incidents",
    "displayName": "Safety Incidents",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "incident_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(255)"
      },
      {
        "name": "date_reported",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_reported DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-safety-observations",
    "sourceProject": "AIConstructionManager",
    "name": "safety_observations",
    "displayName": "Safety Observations",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "observer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "observer VARCHAR(255)"
      },
      {
        "name": "observation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "observation_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "severity VARCHAR(50) DEFAULT 'low'"
      },
      {
        "name": "date_observed",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_observed DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-schedules",
    "sourceProject": "AIConstructionManager",
    "name": "schedules",
    "displayName": "Schedules",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "task_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_name VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "duration_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_days INTEGER"
      },
      {
        "name": "dependencies",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dependencies VARCHAR(255)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'Medium'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-schedules",
    "sourceProject": "AIConstructionManager",
    "name": "schedules",
    "displayName": "Schedules",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "task_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_name VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "duration_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_days INTEGER"
      },
      {
        "name": "dependencies",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dependencies TEXT"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-subcontractors",
    "sourceProject": "AIConstructionManager",
    "name": "subcontractors",
    "displayName": "Subcontractors",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(255)"
      },
      {
        "name": "contact_person",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_person VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(100)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "contract_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_value DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-subcontractors",
    "sourceProject": "AIConstructionManager",
    "name": "subcontractors",
    "displayName": "Subcontractors",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "contact_person",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_person VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(255)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "contract_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_value DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-submittals",
    "sourceProject": "AIConstructionManager",
    "name": "submittals",
    "displayName": "Submittals",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "submittal_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submittal_number VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "spec_section",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spec_section VARCHAR(100)"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "reviewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer VARCHAR(255)"
      },
      {
        "name": "date_submitted",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_submitted DATE"
      },
      {
        "name": "date_required",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_required DATE"
      },
      {
        "name": "date_returned",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_returned DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "revision",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revision VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-submittals",
    "sourceProject": "AIConstructionManager",
    "name": "submittals",
    "displayName": "Submittals",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "submittal_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submittal_number VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "spec_section",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spec_section VARCHAR(100)"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "reviewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer VARCHAR(255)"
      },
      {
        "name": "date_submitted",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_submitted DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "date_required",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_required DATE"
      },
      {
        "name": "date_returned",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_returned DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "revision",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "revision INTEGER DEFAULT 1"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-timesheets",
    "sourceProject": "AIConstructionManager",
    "name": "timesheets",
    "displayName": "Timesheets",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "start_time",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time VARCHAR(20)"
      },
      {
        "name": "end_time",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time VARCHAR(20)"
      },
      {
        "name": "hours_regular",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_regular DECIMAL(5,2)"
      },
      {
        "name": "hours_overtime",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_overtime DECIMAL(5,2)"
      },
      {
        "name": "break_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "break_hours DECIMAL(5,2)"
      },
      {
        "name": "task_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_description TEXT"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-timesheets",
    "sourceProject": "AIConstructionManager",
    "name": "timesheets",
    "displayName": "Timesheets",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "start_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIME"
      },
      {
        "name": "end_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIME"
      },
      {
        "name": "hours_regular",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_regular DECIMAL(6,2)"
      },
      {
        "name": "hours_overtime",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "hours_overtime DECIMAL(6,2) DEFAULT 0"
      },
      {
        "name": "break_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "break_hours DECIMAL(4,2) DEFAULT 0"
      },
      {
        "name": "task_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_description TEXT"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-toolbox-talks",
    "sourceProject": "AIConstructionManager",
    "name": "toolbox_talks",
    "displayName": "Toolbox Talks",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "topic",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topic VARCHAR(255) NOT NULL"
      },
      {
        "name": "presenter",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "presenter VARCHAR(255)"
      },
      {
        "name": "date_conducted",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date_conducted DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "attendee_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "attendee_count INTEGER DEFAULT 0"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-users",
    "sourceProject": "AIConstructionManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manager'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'manager'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-users",
    "sourceProject": "AIConstructionManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-warranties",
    "sourceProject": "AIConstructionManager",
    "name": "warranties",
    "displayName": "Warranties",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "item",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item VARCHAR(255)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "warranty_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_type VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "duration_years",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_years INTEGER"
      },
      {
        "name": "coverage",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage TEXT"
      },
      {
        "name": "contact_info",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_info VARCHAR(255)"
      },
      {
        "name": "claim_procedure",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim_procedure TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-warranties",
    "sourceProject": "AIConstructionManager",
    "name": "warranties",
    "displayName": "Warranties",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "item",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item VARCHAR(255)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "warranty_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_type VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "duration_years",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_years INTEGER"
      },
      {
        "name": "coverage",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage TEXT"
      },
      {
        "name": "contact_info",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_info VARCHAR(255)"
      },
      {
        "name": "claim_procedure",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim_procedure TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-database-schema-sql-weather",
    "sourceProject": "AIConstructionManager",
    "name": "weather",
    "displayName": "Weather",
    "framework": "SQL",
    "sourceFile": "backend/database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE NOT NULL"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(100)"
      },
      {
        "name": "temperature",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature DECIMAL(5,2)"
      },
      {
        "name": "wind_speed",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wind_speed DECIMAL(6,2)"
      },
      {
        "name": "precipitation",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "precipitation DECIMAL(6,2)"
      },
      {
        "name": "impact_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_level VARCHAR(50)"
      },
      {
        "name": "work_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_status VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-manager-backend-seed-js-weather-impacts",
    "sourceProject": "AIConstructionManager",
    "name": "weather_impacts",
    "displayName": "Weather Impacts",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(100)"
      },
      {
        "name": "temperature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature VARCHAR(50)"
      },
      {
        "name": "wind_speed",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wind_speed VARCHAR(50)"
      },
      {
        "name": "precipitation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "precipitation VARCHAR(50)"
      },
      {
        "name": "impact_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_level VARCHAR(50)"
      },
      {
        "name": "work_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_status VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-ai-logs",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "ai_logs",
    "displayName": "Ai Logs",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100) NOT NULL"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "output_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_data JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost DECIMAL(10, 6)"
      },
      {
        "name": "response_time_ms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_time_ms INTEGER"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5, 2)"
      },
      {
        "name": "was_accepted",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "was_accepted BOOLEAN"
      },
      {
        "name": "feedback",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback VARCHAR(50)"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-ai-js-ai-results",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "output_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_data JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-jobs-js-ai-results",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/routes/jobs.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "output_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_data JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-bookings",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "bookings",
    "displayName": "Bookings",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "booking_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "booking_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER REFERENCES customers(id)"
      },
      {
        "name": "service_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_id INTEGER REFERENCES services(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20) NOT NULL"
      },
      {
        "name": "address_line1",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_line1 VARCHAR(255) NOT NULL"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100) NOT NULL"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state VARCHAR(50) NOT NULL"
      },
      {
        "name": "zip_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip_code VARCHAR(20) NOT NULL"
      },
      {
        "name": "preferred_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferred_date DATE"
      },
      {
        "name": "preferred_time",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferred_time VARCHAR(50)"
      },
      {
        "name": "property_sqft",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_sqft INTEGER"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'website'",
        "sourceLine": "source VARCHAR(50) DEFAULT 'website'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "converted_to_quote_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "converted_to_quote_id INTEGER REFERENCES quotes(id)"
      },
      {
        "name": "converted_to_job_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "converted_to_job_id INTEGER REFERENCES jobs(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-chemicals",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "chemicals",
    "displayName": "Chemicals",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(200) NOT NULL"
      },
      {
        "name": "brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand VARCHAR(100)"
      },
      {
        "name": "chemical_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chemical_type VARCHAR(100)"
      },
      {
        "name": "active_ingredient",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "active_ingredient VARCHAR(200)"
      },
      {
        "name": "concentration_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "concentration_percent DECIMAL(5, 2)"
      },
      {
        "name": "sds_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sds_url TEXT"
      },
      {
        "name": "unit_of_measure",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'gallons'",
        "sourceLine": "unit_of_measure VARCHAR(50) DEFAULT 'gallons'"
      },
      {
        "name": "current_stock",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_stock DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "reorder_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "reorder_level DECIMAL(10, 2) DEFAULT 5"
      },
      {
        "name": "cost_per_unit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_per_unit DECIMAL(10, 2)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(200)"
      },
      {
        "name": "supplier_sku",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_sku VARCHAR(100)"
      },
      {
        "name": "mixing_ratio_chemical",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mixing_ratio_chemical VARCHAR(50)"
      },
      {
        "name": "mixing_ratio_water",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mixing_ratio_water VARCHAR(50)"
      },
      {
        "name": "downstream_ratio",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "downstream_ratio VARCHAR(50)"
      },
      {
        "name": "xjet_ratio",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "xjet_ratio VARCHAR(50)"
      },
      {
        "name": "recommended_surfaces",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommended_surfaces TEXT"
      },
      {
        "name": "safety_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "safety_notes TEXT"
      },
      {
        "name": "storage_requirements",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storage_requirements VARCHAR(200)"
      },
      {
        "name": "shelf_life_months",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shelf_life_months INTEGER"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-contracts",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "contracts",
    "displayName": "Contracts",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "contract_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "contract_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER NOT NULL REFERENCES customers(id)"
      },
      {
        "name": "property_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_id INTEGER REFERENCES properties(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(200) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'annual'",
        "sourceLine": "contract_type VARCHAR(50) DEFAULT 'annual'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE NOT NULL"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE NOT NULL"
      },
      {
        "name": "monthly_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_amount DECIMAL(10, 2)"
      },
      {
        "name": "annual_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_amount DECIMAL(10, 2)"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Net",
        "sourceLine": "payment_terms VARCHAR(100) DEFAULT 'Net 30'"
      },
      {
        "name": "scope_of_work",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope_of_work TEXT"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency VARCHAR(50)"
      },
      {
        "name": "auto_renew",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "auto_renew BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "signed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signed_date DATE"
      },
      {
        "name": "signed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signed_by VARCHAR(200)"
      },
      {
        "name": "document_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_url TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-crew-members",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "crew_members",
    "displayName": "Crew Members",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "crew_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_id INTEGER NOT NULL REFERENCES crews(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'member'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'member'"
      },
      {
        "name": "joined_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "joined_date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "left_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "left_date DATE"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-crews",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "crews",
    "displayName": "Crews",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "lead_user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead_user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(100)"
      },
      {
        "name": "max_members",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "4",
        "sourceLine": "max_members INTEGER DEFAULT 4"
      },
      {
        "name": "color_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color_code VARCHAR(7)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-customers",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "customers",
    "displayName": "Customers",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "alt_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_phone VARCHAR(20)"
      },
      {
        "name": "customer_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'residential'",
        "sourceLine": "customer_type VARCHAR(50) DEFAULT 'residential'"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(200)"
      },
      {
        "name": "billing_address_line1",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_address_line1 VARCHAR(255)"
      },
      {
        "name": "billing_address_line2",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_address_line2 VARCHAR(255)"
      },
      {
        "name": "billing_city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_city VARCHAR(100)"
      },
      {
        "name": "billing_state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_state VARCHAR(50)"
      },
      {
        "name": "billing_zip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_zip VARCHAR(20)"
      },
      {
        "name": "referral_source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referral_source VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-environmental-compliance",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "environmental_compliance",
    "displayName": "Environmental Compliance",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "compliance_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "jurisdiction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jurisdiction VARCHAR(200)"
      },
      {
        "name": "permit_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permit_number VARCHAR(100)"
      },
      {
        "name": "issuing_authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuing_authority VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'compliant'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'compliant'"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "wastewater_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wastewater_method VARCHAR(200)"
      },
      {
        "name": "reclaim_system",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "reclaim_system BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "berm_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "berm_required BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "chemical_disposal_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chemical_disposal_method VARCHAR(200)"
      },
      {
        "name": "document_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_url TEXT"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "reviewed_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "last_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_audit_date DATE"
      },
      {
        "name": "next_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_audit_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-equipment",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(200) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand VARCHAR(100)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "equipment_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_type VARCHAR(100)"
      },
      {
        "name": "psi_rating",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "psi_rating INTEGER"
      },
      {
        "name": "gpm_rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gpm_rating DECIMAL(5, 2)"
      },
      {
        "name": "fuel_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fuel_type VARCHAR(50)"
      },
      {
        "name": "purchase_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_date DATE"
      },
      {
        "name": "purchase_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_price DECIMAL(10, 2)"
      },
      {
        "name": "current_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_value DECIMAL(10, 2)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "assigned_crew_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_crew_id INTEGER REFERENCES crews(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available'"
      },
      {
        "name": "condition_rating",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "condition_rating INTEGER DEFAULT 5"
      },
      {
        "name": "last_service_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_service_date DATE"
      },
      {
        "name": "next_service_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_service_date DATE"
      },
      {
        "name": "hours_used",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "hours_used DECIMAL(10, 1) DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "warranty_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_expiry DATE"
      },
      {
        "name": "image_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-fleet-vehicles",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "fleet_vehicles",
    "displayName": "Fleet Vehicles",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "vehicle_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "make",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "make VARCHAR(100)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year INTEGER"
      },
      {
        "name": "vin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vin VARCHAR(50)"
      },
      {
        "name": "license_plate",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_plate VARCHAR(20)"
      },
      {
        "name": "color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color VARCHAR(50)"
      },
      {
        "name": "mileage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mileage INTEGER"
      },
      {
        "name": "fuel_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fuel_type VARCHAR(50)"
      },
      {
        "name": "assigned_crew_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_crew_id INTEGER REFERENCES crews(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "insurance_policy",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insurance_policy VARCHAR(100)"
      },
      {
        "name": "insurance_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insurance_expiry DATE"
      },
      {
        "name": "registration_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "registration_expiry DATE"
      },
      {
        "name": "last_inspection",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_inspection DATE"
      },
      {
        "name": "next_inspection",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_inspection DATE"
      },
      {
        "name": "gps_tracker_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gps_tracker_id VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "image_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-contracts-without-contract-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_contracts_without_contract.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-crews-without-crew-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_crews_without_crew.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-customers-without-customer-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_customers_without_customer.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-equipment-without-equipment-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_equipment_without_equipment.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-frontend-severely-underbuilt-for-29-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_frontend_severely_underbuilt_for_29.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-limited-customer-self-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_limited_customer_self.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-limited-mobile-app-for-crew-1-mobile-reference-no-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_limited_mobile_app_for_crew_1_mobile_reference_no_.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-no-integration-with-accounting-quickbooks-freshboo-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_no_integration_with_accounting_quickbooks_freshboo.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-no-integration-with-payment-processing-square-stri-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_no_integration_with_payment_processing_square_stri.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-no-real-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_no_real.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-routes-gap-feat-no-webhooks-js-gap-features",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapFeat_no_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-insurance-certificates",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "insurance_certificates",
    "displayName": "Insurance Certificates",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "policy_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policy_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(200) NOT NULL"
      },
      {
        "name": "policy_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policy_number VARCHAR(100) NOT NULL"
      },
      {
        "name": "coverage_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_amount DECIMAL(12, 2)"
      },
      {
        "name": "deductible",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deductible DECIMAL(10, 2)"
      },
      {
        "name": "premium_monthly",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "premium_monthly DECIMAL(10, 2)"
      },
      {
        "name": "premium_annual",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "premium_annual DECIMAL(10, 2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE NOT NULL"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "agent_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent_name VARCHAR(200)"
      },
      {
        "name": "agent_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent_phone VARCHAR(20)"
      },
      {
        "name": "agent_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent_email VARCHAR(255)"
      },
      {
        "name": "document_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_url TEXT"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-invoice-items",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "invoice_items",
    "displayName": "Invoice Items",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "invoice_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice_id INTEGER NOT NULL REFERENCES invoices(id) ON DELETE CASCADE"
      },
      {
        "name": "service_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_id INTEGER REFERENCES services(id)"
      },
      {
        "name": "description",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description VARCHAR(500) NOT NULL"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity DECIMAL(10, 2) DEFAULT 1"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "total_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_price DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "sort_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sort_order INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-invoices",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "invoices",
    "displayName": "Invoices",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "invoice_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoice_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER NOT NULL REFERENCES customers(id)"
      },
      {
        "name": "job_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_id INTEGER REFERENCES jobs(id)"
      },
      {
        "name": "quote_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote_id INTEGER REFERENCES quotes(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "issue_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "issue_date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal DECIMAL(10, 2)"
      },
      {
        "name": "discount_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount_amount DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "tax_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_rate DECIMAL(5, 2) DEFAULT 0"
      },
      {
        "name": "tax_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_amount DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(10, 2)"
      },
      {
        "name": "amount_paid",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_paid DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(50)"
      },
      {
        "name": "payment_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_date DATE"
      },
      {
        "name": "stripe_payment_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripe_payment_id VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-jobs",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "jobs",
    "displayName": "Jobs",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "job_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "job_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "quote_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote_id INTEGER REFERENCES quotes(id)"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER NOT NULL REFERENCES customers(id)"
      },
      {
        "name": "property_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_id INTEGER REFERENCES properties(id)"
      },
      {
        "name": "service_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_id INTEGER REFERENCES services(id)"
      },
      {
        "name": "crew_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_id INTEGER REFERENCES crews(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to INTEGER REFERENCES users(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'normal'"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "scheduled_time_start",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time_start TIME"
      },
      {
        "name": "scheduled_time_end",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time_end TIME"
      },
      {
        "name": "actual_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_start TIMESTAMP"
      },
      {
        "name": "actual_end",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_end TIMESTAMP"
      },
      {
        "name": "estimated_duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_duration_minutes INTEGER"
      },
      {
        "name": "actual_duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_duration_minutes INTEGER"
      },
      {
        "name": "total_sqft",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_sqft INTEGER"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10, 2)"
      },
      {
        "name": "weather_conditions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather_conditions VARCHAR(100)"
      },
      {
        "name": "temperature_f",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature_f INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "completion_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completion_notes TEXT"
      },
      {
        "name": "customer_signature_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_signature_url TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-locations",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "locations",
    "displayName": "Locations",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(200) NOT NULL"
      },
      {
        "name": "address_line1",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_line1 VARCHAR(255) NOT NULL"
      },
      {
        "name": "address_line2",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_line2 VARCHAR(255)"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100) NOT NULL"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state VARCHAR(50) NOT NULL"
      },
      {
        "name": "zip_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip_code VARCHAR(20) NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "manager_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manager_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "service_radius_miles",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "service_radius_miles INTEGER DEFAULT 30"
      },
      {
        "name": "is_headquarters",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_headquarters BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "latitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude DECIMAL(10, 7)"
      },
      {
        "name": "longitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude DECIMAL(10, 7)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-maintenance-logs",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "maintenance_logs",
    "displayName": "Maintenance Logs",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "equipment_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_id INTEGER REFERENCES equipment(id) ON DELETE CASCADE"
      },
      {
        "name": "vehicle_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle_id INTEGER REFERENCES fleet_vehicles(id) ON DELETE CASCADE"
      },
      {
        "name": "performed_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performed_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "maintenance_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenance_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "parts_replaced",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parts_replaced TEXT"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost DECIMAL(10, 2)"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(200)"
      },
      {
        "name": "hours_at_service",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_at_service DECIMAL(10, 1)"
      },
      {
        "name": "mileage_at_service",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mileage_at_service INTEGER"
      },
      {
        "name": "next_service_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_service_date DATE"
      },
      {
        "name": "next_service_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_service_hours DECIMAL(10, 1)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "performed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "performed_date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-marketing-campaigns",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "marketing_campaigns",
    "displayName": "Marketing Campaigns",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(200) NOT NULL"
      },
      {
        "name": "campaign_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "channel",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel VARCHAR(100)"
      },
      {
        "name": "target_audience",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_audience VARCHAR(200)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(10, 2)"
      },
      {
        "name": "spent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spent DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "impressions",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "impressions INTEGER DEFAULT 0"
      },
      {
        "name": "clicks",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "clicks INTEGER DEFAULT 0"
      },
      {
        "name": "leads_generated",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "leads_generated INTEGER DEFAULT 0"
      },
      {
        "name": "conversions",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "conversions INTEGER DEFAULT 0"
      },
      {
        "name": "revenue_generated",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "revenue_generated DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "roi_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roi_percent DECIMAL(7, 2)"
      },
      {
        "name": "promo_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "promo_code VARCHAR(50)"
      },
      {
        "name": "discount_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_percent DECIMAL(5, 2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-photos",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "photos",
    "displayName": "Photos",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "job_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE"
      },
      {
        "name": "property_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_id INTEGER REFERENCES properties(id)"
      },
      {
        "name": "uploaded_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "photo_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'before'",
        "sourceLine": "photo_type VARCHAR(50) NOT NULL DEFAULT 'before'"
      },
      {
        "name": "url",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url TEXT NOT NULL"
      },
      {
        "name": "thumbnail_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail_url TEXT"
      },
      {
        "name": "caption",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "caption TEXT"
      },
      {
        "name": "surface_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "surface_type VARCHAR(100)"
      },
      {
        "name": "tags",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT"
      },
      {
        "name": "latitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude DECIMAL(10, 7)"
      },
      {
        "name": "longitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude DECIMAL(10, 7)"
      },
      {
        "name": "taken_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "taken_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-properties",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "properties",
    "displayName": "Properties",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER NOT NULL REFERENCES customers(id) ON DELETE CASCADE"
      },
      {
        "name": "property_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_name VARCHAR(200)"
      },
      {
        "name": "address_line1",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_line1 VARCHAR(255) NOT NULL"
      },
      {
        "name": "address_line2",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_line2 VARCHAR(255)"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100) NOT NULL"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state VARCHAR(50) NOT NULL"
      },
      {
        "name": "zip_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip_code VARCHAR(20) NOT NULL"
      },
      {
        "name": "property_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'residential'",
        "sourceLine": "property_type VARCHAR(50) DEFAULT 'residential'"
      },
      {
        "name": "square_footage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage INTEGER"
      },
      {
        "name": "stories",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "stories INTEGER DEFAULT 1"
      },
      {
        "name": "roof_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roof_type VARCHAR(100)"
      },
      {
        "name": "siding_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "siding_type VARCHAR(100)"
      },
      {
        "name": "deck_material",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deck_material VARCHAR(100)"
      },
      {
        "name": "driveway_sqft",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "driveway_sqft INTEGER"
      },
      {
        "name": "has_pool",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "has_pool BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "has_fence",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "has_fence BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "gate_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gate_code VARCHAR(50)"
      },
      {
        "name": "special_instructions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "special_instructions TEXT"
      },
      {
        "name": "latitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude DECIMAL(10, 7)"
      },
      {
        "name": "longitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude DECIMAL(10, 7)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-quotes",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "quotes",
    "displayName": "Quotes",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "quote_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "quote_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER NOT NULL REFERENCES customers(id)"
      },
      {
        "name": "property_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_id INTEGER REFERENCES properties(id)"
      },
      {
        "name": "service_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_id INTEGER REFERENCES services(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "prepared_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prepared_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "total_sqft",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_sqft INTEGER"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(10, 2)"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal DECIMAL(10, 2)"
      },
      {
        "name": "discount_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount_percent DECIMAL(5, 2) DEFAULT 0"
      },
      {
        "name": "discount_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount_amount DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "tax_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_rate DECIMAL(5, 2) DEFAULT 0"
      },
      {
        "name": "tax_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_amount DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(10, 2)"
      },
      {
        "name": "valid_until",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valid_until DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_suggested_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_suggested_price DECIMAL(10, 2)"
      },
      {
        "name": "ai_confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_confidence_score DECIMAL(5, 2)"
      },
      {
        "name": "sent_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sent_at TIMESTAMP"
      },
      {
        "name": "accepted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accepted_at TIMESTAMP"
      },
      {
        "name": "declined_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declined_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-referrals",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "referrals",
    "displayName": "Referrals",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "referrer_customer_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer_customer_id INTEGER REFERENCES customers(id)"
      },
      {
        "name": "referred_customer_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred_customer_id INTEGER REFERENCES customers(id)"
      },
      {
        "name": "referral_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "referral_code VARCHAR(50) UNIQUE"
      },
      {
        "name": "referrer_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer_name VARCHAR(200)"
      },
      {
        "name": "referred_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred_name VARCHAR(200)"
      },
      {
        "name": "referred_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred_email VARCHAR(255)"
      },
      {
        "name": "referred_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred_phone VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "reward_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'discount'",
        "sourceLine": "reward_type VARCHAR(50) DEFAULT 'discount'"
      },
      {
        "name": "reward_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reward_amount DECIMAL(10, 2)"
      },
      {
        "name": "reward_issued",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "reward_issued BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "reward_issued_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reward_issued_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-reviews",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "reviews",
    "displayName": "Reviews",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER REFERENCES customers(id)"
      },
      {
        "name": "job_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_id INTEGER REFERENCES jobs(id)"
      },
      {
        "name": "rating",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(200)"
      },
      {
        "name": "comment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment TEXT"
      },
      {
        "name": "service_quality",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_quality INTEGER CHECK (service_quality >= 1 AND service_quality <= 5)"
      },
      {
        "name": "professionalism",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "professionalism INTEGER CHECK (professionalism >= 1 AND professionalism <= 5)"
      },
      {
        "name": "punctuality",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "punctuality INTEGER CHECK (punctuality >= 1 AND punctuality <= 5)"
      },
      {
        "name": "value_for_money",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value_for_money INTEGER CHECK (value_for_money >= 1 AND value_for_money <= 5)"
      },
      {
        "name": "would_recommend",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "would_recommend BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "is_public",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_public BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response TEXT"
      },
      {
        "name": "response_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_date TIMESTAMP"
      },
      {
        "name": "platform",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'internal'",
        "sourceLine": "platform VARCHAR(50) DEFAULT 'internal'"
      },
      {
        "name": "external_review_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "external_review_id VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-route-sheets",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "route_sheets",
    "displayName": "Route Sheets",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "route_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "route_date DATE NOT NULL"
      },
      {
        "name": "crew_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_id INTEGER NOT NULL REFERENCES crews(id)"
      },
      {
        "name": "vehicle_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle_id INTEGER REFERENCES fleet_vehicles(id)"
      },
      {
        "name": "location_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id INTEGER REFERENCES locations(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "total_jobs",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_jobs INTEGER DEFAULT 0"
      },
      {
        "name": "total_estimated_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_estimated_hours DECIMAL(5, 1)"
      },
      {
        "name": "total_actual_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_actual_hours DECIMAL(5, 1)"
      },
      {
        "name": "total_miles",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_miles DECIMAL(7, 1)"
      },
      {
        "name": "start_mileage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_mileage INTEGER"
      },
      {
        "name": "end_mileage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_mileage INTEGER"
      },
      {
        "name": "fuel_gallons",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fuel_gallons DECIMAL(5, 1)"
      },
      {
        "name": "job_ids",
        "type": "INTEGER[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_ids INTEGER[]"
      },
      {
        "name": "route_order",
        "type": "INTEGER[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "route_order INTEGER[]"
      },
      {
        "name": "optimized_by_ai",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "optimized_by_ai BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-safety-checklists",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "safety_checklists",
    "displayName": "Safety Checklists",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "job_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_id INTEGER REFERENCES jobs(id)"
      },
      {
        "name": "crew_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_id INTEGER REFERENCES crews(id)"
      },
      {
        "name": "completed_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "checklist_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "checklist_date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "ppe_hard_hat",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "ppe_hard_hat BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "ppe_safety_glasses",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "ppe_safety_glasses BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "ppe_gloves",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "ppe_gloves BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "ppe_boots",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "ppe_boots BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "ppe_hearing_protection",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "ppe_hearing_protection BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "equipment_inspected",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "equipment_inspected BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "hoses_inspected",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "hoses_inspected BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "chemical_labels_checked",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "chemical_labels_checked BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "sds_sheets_available",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "sds_sheets_available BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "area_secured",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "area_secured BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "windows_closed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "windows_closed BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "plants_covered",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "plants_covered BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "vehicles_moved",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "vehicles_moved BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "electrical_hazards_checked",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "electrical_hazards_checked BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "weather_appropriate",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "weather_appropriate BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "signature_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signature_url TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-service-plans",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "service_plans",
    "displayName": "Service Plans",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "plan_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_name VARCHAR(200) NOT NULL"
      },
      {
        "name": "customer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id INTEGER NOT NULL REFERENCES customers(id)"
      },
      {
        "name": "property_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_id INTEGER REFERENCES properties(id)"
      },
      {
        "name": "service_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_id INTEGER REFERENCES services(id)"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency VARCHAR(50) NOT NULL"
      },
      {
        "name": "price_per_visit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_per_visit DECIMAL(10, 2)"
      },
      {
        "name": "annual_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_price DECIMAL(10, 2)"
      },
      {
        "name": "discount_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount_percent DECIMAL(5, 2) DEFAULT 0"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE NOT NULL"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "next_service_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_service_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "auto_renew",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "auto_renew BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-services",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "services",
    "displayName": "Services",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(200) NOT NULL"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(200) UNIQUE NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "base_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "base_price DECIMAL(10, 2)"
      },
      {
        "name": "price_unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'per_sqft'",
        "sourceLine": "price_unit VARCHAR(50) DEFAULT 'per_sqft'"
      },
      {
        "name": "min_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "min_price DECIMAL(10, 2)"
      },
      {
        "name": "estimated_duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_duration_minutes INTEGER"
      },
      {
        "name": "requires_soft_wash",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "requires_soft_wash BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "requires_hot_water",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "requires_hot_water BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "chemical_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "chemical_required BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "sort_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sort_order INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-time-entries",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "time_entries",
    "displayName": "Time Entries",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id)"
      },
      {
        "name": "job_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_id INTEGER REFERENCES jobs(id)"
      },
      {
        "name": "crew_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_id INTEGER REFERENCES crews(id)"
      },
      {
        "name": "entry_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "entry_date DATE NOT NULL DEFAULT CURRENT_DATE"
      },
      {
        "name": "clock_in",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clock_in TIMESTAMP NOT NULL"
      },
      {
        "name": "clock_out",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clock_out TIMESTAMP"
      },
      {
        "name": "break_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "break_minutes INTEGER DEFAULT 0"
      },
      {
        "name": "total_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_hours DECIMAL(5, 2)"
      },
      {
        "name": "entry_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'work'",
        "sourceLine": "entry_type VARCHAR(50) DEFAULT 'work'"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(8, 2)"
      },
      {
        "name": "total_pay",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_pay DECIMAL(10, 2)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "gps_clock_in_lat",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gps_clock_in_lat DECIMAL(10, 7)"
      },
      {
        "name": "gps_clock_in_lng",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gps_clock_in_lng DECIMAL(10, 7)"
      },
      {
        "name": "gps_clock_out_lat",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gps_clock_out_lat DECIMAL(10, 7)"
      },
      {
        "name": "gps_clock_out_lng",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gps_clock_out_lng DECIMAL(10, 7)"
      },
      {
        "name": "approved_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-training-records",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "training_records",
    "displayName": "Training Records",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id)"
      },
      {
        "name": "training_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "training_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(200) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(200)"
      },
      {
        "name": "certification_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification_number VARCHAR(100)"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score DECIMAL(5, 2)"
      },
      {
        "name": "passed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "passed BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "document_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_url TEXT"
      },
      {
        "name": "hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours DECIMAL(5, 1)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-pressure-washing-exterior-cleaning-server-schema-sql-users",
    "sourceProject": "AIPressureWashingExteriorCleaning",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'technician'",
        "sourceLine": "role VARCHAR(50) NOT NULL DEFAULT 'technician'"
      },
      {
        "name": "avatar_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar_url TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_login",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_login TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  }
];
