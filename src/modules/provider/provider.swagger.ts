/**
 * @swagger
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       required:
 *         - name
 *         - code
 *         - feesSupportedBy
 *         - percentage
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         feesSupportedBy:
 *           type: string
 *         percentage:
 *           type: number
 *         code:
 *           type: string
 *       example:
 *         name: MTN-BENIN
 *         code: mtn-benin
 *         percentage: 1.9
 *         feesSupportedBy: merchant
 */

/**
 * @swagger
 * tags:
 *   name: Providers
 *   description: The Providers managing API
 * /providers:
 *   get:
 *     summary: Lists all the Providers
 *     tags: [Providers]
 *     responses:
 *       200:
 *         description: The list of the Providers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Provider'
 *   post:
 *     summary: Create a new Provider
 *     tags: [Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provider'
 *     responses:
 *       200:
 *         description: The created Provider.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Provider'
 *       500:
 *         description: Some server error
 * /providers/{id}:
 *   get:
 *     summary: Get the Provider by id
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Provider id
 *     responses:
 *       200:
 *         description: The Provider response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Provider'
 *       404:
 *         description: The Provider was not found
 *   put:
 *    summary: Update the Provider by the id
 *    tags: [Providers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Provider id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Provider'
 *    responses:
 *      200:
 *        description: The Provider was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Provider'
 *      404:
 *        description: The Provider was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Provider by id
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Provider id
 *
 *     responses:
 *       200:
 *         description: The Provider was deleted
 *       404:
 *         description: The Provider was not found
 */
