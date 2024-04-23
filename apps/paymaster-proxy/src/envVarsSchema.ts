import 'dotenv/config'

import { inferSchemas } from 'znv'
import { z } from 'zod'

export const envVarsSchema = inferSchemas({
  PORT: {
    schema: z.number(),
    defaults: {
      test: 7310,
    },
  },
  REDIS_URL: {
    schema: z.string(),
    defaults: {
      test: 'redis://localhost:6379',
    },
  },
  SCREENING_SERVICE_URL: {
    schema: z.string(),
    defaults: {
      test: 'https://screening-service.localhost',
    },
  },
  ALCHEMY_RPC_URL_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'https://sepolia.g.alchemy.com/v2/testapikey',
    },
  },
  ALCHEMY_GAS_MANAGER_POLICY_ID_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'test-policy-id',
    },
  },
  ALCHEMY_RPC_URL_OP_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'https://opt-sepolia.g.alchemy.com/v2/testapikey',
    },
  },
  ALCHEMY_GAS_MANAGER_POLICY_ID_OP_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'test-policy-id',
    },
  },
  ALCHEMY_RPC_URL_BASE_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'https://base-sepolia.g.alchemy.com/v2/testapikey',
    },
  },
  ALCHEMY_GAS_MANAGER_POLICY_ID_BASE_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'test-policy-id',
    },
  },
  ALCHEMY_RPC_URL_ZORA_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'https://zora-sepolia.g.alchemy.com/v2/testapikey',
    },
  },
  ALCHEMY_GAS_MANAGER_POLICY_ID_ZORA_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'test-policy-id',
    },
  },
  ALCHEMY_RPC_URL_FRAXTAL_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'https://fraxtal-sepolia.g.alchemy.com/v2/testapikey',
    },
  },
  ALCHEMY_GAS_MANAGER_POLICY_ID_FRAXTAL_SEPOLIA: {
    schema: z.string(),
    defaults: {
      test: 'test-policy-id',
    },
  },
})
