/**
 * @swagger
 * components:
 *   schemas:
 *     Billing:
 *       type: object
 *       required:
 *         - provider
 *         - fees
 *         - feeSupportedBy
 *         - amount
 *         - net
 *       properties:
 *         provider:
 *           type: string
 *         fees:
 *           type: number
 *         feeSupportedBy:
 *           type: string
 *         amount:
 *           type: number
 *         net:
 *           type: number
 *       example:
 *         provider: mtn-benin
 *         fees: 20
 *         feeSupportedBy: client
 *         amount: 200
 *         net: 200
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BillingPayload:
 *       type: object
 *       required:
 *         - provider
 *         - amount
 *       properties:
 *         provider:
 *           type: string
 *         amount:
 *           type: number
 *       example:
 *         provider: mtn-benin
 *         amount: 200
 *
 */

/**
 * @swagger
 * tags:
 *   name: Billings
 *   description: The billing managing API
 * /billing:
 *   post:
 *     summary: Get payment billing
 *     tags: [Billings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BillingPayload'
 *     responses:
 *       200:
 *         description: Get billing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Billing'
 *       500:
 *         description: Some server error
 *
 */
