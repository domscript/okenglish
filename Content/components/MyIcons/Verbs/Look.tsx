import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

const paths = [
  'M257 306C257 290 255 275 251 259C249 254 247 252 241 252C232 253 223 252 214 253C212 253 210 252 210 249C210 247 209 246 206 246C201 246 196 245 191 245C182 245 179 242 177 233C173 210 168 187 166 163C165 150 174 135 186 131C188 130 191 130 192 132C193 134 192 136 190 137C186 141 185 147 186 153C186 152 186 151 186 150C187 148 188 146 190 146C193 146 192 149 192 151C193 159 189 166 183 171C180 174 179 176 180 179C185 193 188 208 191 222C193 227 195 229 200 229C203 228 206 228 209 229C211 229 213 228 213 226C213 223 215 223 218 223C228 225 238 226 248 228C251 228 253 228 255 227C260 224 266 221 271 218C277 214 277 213 275 205C271 205 267 206 263 206C257 206 251 204 247 199C238 190 233 179 231 167C227 141 229 115 236 90C242 68 257 58 278 55C295 53 309 58 322 68C333 76 337 87 337 100C338 111 336 123 333 134C333 136 332 138 332 141C333 141 333 141 334 141C343 142 346 146 342 155C339 163 334 170 327 176C323 179 318 181 313 178C311 177 310 178 309 179C304 184 299 188 294 193C292 194 291 196 292 198C292 199 292 199 292 199C294 206 294 214 304 215C313 217 321 222 330 225C333 227 335 228 336 231C342 242 348 252 354 263C356 265 357 267 354 269C350 270 352 273 353 275C356 284 361 292 363 302C367 321 372 339 375 358C375 363 378 369 379 374C383 385 379 394 373 403C371 405 370 407 368 409C366 410 363 411 361 410C359 408 360 406 361 404C364 399 365 394 362 389C363 392 362 394 358 395C356 390 354 385 355 379C356 374 358 369 361 365C363 362 363 360 362 357C356 339 351 321 346 303C344 295 340 288 336 280C336 293 338 305 339 316C340 323 341 330 342 336C342 340 341 342 338 342C336 343 335 343 334 344C330 344 330 346 329 349C326 376 327 403 326 429C325 437 326 444 326 452C325 481 324 511 323 541C323 550 326 559 333 565C334 565 335 566 335 566C338 569 342 571 340 576C338 581 333 580 328 580C322 579 318 576 314 571C308 563 308 556 312 548C312 547 312 545 312 543C311 511 311 478 310 445C309 424 306 403 304 382C304 380 303 379 300 379C292 379 292 380 291 387C291 404 289 420 289 436C288 458 288 480 288 502C288 513 288 523 287 534C287 542 288 550 291 558C291 560 291 561 291 562C289 574 274 583 263 579C259 578 258 575 260 571C261 569 263 568 265 567C273 560 277 550 276 539C275 508 274 477 273 445C271 421 269 397 268 373C268 372 268 370 267 370C263 365 262 359 262 353C262 352 262 350 261 350C257 348 258 345 258 342C258 331 258 319 257 306Z',

  'M254 285C252 275 250 265 246 256C245 253 243 251 240 251C230 249 220 247 209 245C207 245 205 244 206 241C206 239 204 238 202 237C197 236 192 235 186 233C178 231 176 227 177 219C180 198 184 177 188 156C189 153 189 149 190 146C192 132 202 127 214 123C216 122 217 124 220 122C221 115 222 107 223 100C224 93 226 86 229 79C234 66 243 59 256 55C276 49 294 51 311 64C321 72 326 82 326 95C327 107 326 119 323 131C322 133 322 135 322 137C324 138 325 137 327 137C332 138 335 141 334 146C331 156 326 165 317 172C314 175 309 176 305 174C303 173 302 174 300 175C296 180 291 184 286 189C284 191 284 192 284 195C286 204 289 212 300 213C309 215 317 219 325 223C327 224 329 226 330 228C337 238 344 248 351 258C352 261 353 263 350 264C348 266 349 267 350 269C364 294 370 322 377 350C378 354 379 358 381 361C388 375 386 388 377 400C375 403 373 405 368 404C370 395 371 386 367 377C366 379 367 381 367 383C368 385 368 388 365 389C363 389 363 386 362 385C358 377 361 369 364 361C367 357 367 354 365 350C358 334 353 318 347 302C344 293 339 285 334 276C334 276 334 277 333 277C334 286 335 296 337 305C338 315 340 325 342 334C343 337 342 339 339 340C339 340 339 340 338 340C336 342 332 341 329 344C327 347 330 350 329 354C329 358 328 363 327 368C327 388 326 409 326 429C326 465 324 500 323 536C323 549 326 560 336 568C337 569 338 570 339 571C342 575 341 579 336 580C325 581 320 579 314 572C308 564 308 557 312 548C313 547 313 544 313 542C312 523 311 505 311 487C311 456 308 425 305 395C305 391 304 387 304 383C304 380 302 379 300 379C292 380 291 380 291 389C290 405 289 422 289 439C288 473 288 508 287 543C287 548 289 553 290 558C291 562 291 565 288 568C286 570 286 572 284 573C280 580 270 583 262 580C259 578 258 576 260 573C261 571 263 569 265 567C274 559 278 550 276 537C275 528 275 518 275 508C274 487 274 466 273 445C272 421 270 397 268 373C268 372 267 370 267 369C264 366 263 362 262 358C257 341 259 322 257 305C256 298 255 292 254 285ZM232 189C221 171 220 150 220 129C213 131 210 137 209 145C212 143 211 137 217 138C217 148 214 154 205 159C199 162 198 167 197 174C197 186 195 198 194 210C193 218 193 218 201 220C203 220 205 221 208 221C209 222 211 222 212 221C214 215 218 218 221 219C224 220 227 220 229 222C242 229 253 227 264 218C271 212 272 211 269 201C248 208 240 201 232 189Z',
  'M338 283C336 280 335 278 333 275C334 287 336 299 338 311C339 318 341 326 343 333C343 337 342 338 339 340C336 341 332 341 329 343C327 346 330 350 329 354C325 374 327 394 326 415C326 419 326 424 326 428C326 464 324 501 323 537C323 549 326 560 336 568C338 570 342 573 340 577C338 581 334 580 330 580C324 580 319 578 315 572C309 564 307 557 312 549C313 547 313 544 313 542C311 524 312 506 311 489C310 474 311 459 310 444C309 428 307 413 305 397C305 392 304 387 304 383C304 380 302 379 300 379C292 380 291 380 291 389C290 406 289 423 289 440C288 474 288 508 287 543C287 548 289 553 290 558C291 562 291 565 288 568C287 570 286 571 284 573C280 580 270 583 262 580C259 578 258 576 260 573C261 571 263 569 265 567C274 559 278 550 276 538C275 527 275 517 275 507C274 486 274 464 273 443C271 420 270 397 268 373C268 372 268 370 267 369C263 365 263 361 262 356C258 337 259 318 256 299C254 285 251 272 246 258C244 254 242 252 238 252C228 251 218 249 209 247C206 247 203 247 204 243C205 240 203 240 201 239C196 238 190 237 185 235C177 234 174 229 175 221C178 202 180 183 184 164C185 160 186 156 186 152C186 140 193 133 203 128C207 126 210 123 215 124C217 116 218 107 219 99C220 92 222 85 225 78C231 64 242 59 255 55C275 49 292 53 308 66C319 74 322 86 322 98C323 109 321 120 319 131C319 133 318 135 318 136C319 137 319 137 319 137C329 135 333 141 329 150C327 156 324 161 320 166C315 172 310 177 301 174C299 173 299 174 297 175C293 180 288 185 283 189C282 191 281 192 282 194C282 195 282 195 282 196C284 204 287 212 298 213C307 214 315 219 323 223C325 224 327 226 329 228C336 238 343 248 350 257C351 260 352 261 349 263C347 265 348 266 349 268C361 288 367 310 373 332C377 344 381 357 385 369C389 378 384 395 376 401C375 402 372 404 370 402C368 401 370 399 370 397C372 389 372 389 369 376C367 380 372 384 366 388C361 382 361 375 362 369C363 365 364 362 366 359C368 356 368 353 366 349C360 336 355 322 350 308C346 299 343 291 338 283ZM210 140C213 139 214 140 213 143C213 152 208 158 201 162C196 165 194 168 195 173C195 186 193 199 192 211C192 214 191 216 192 219C192 221 209 225 210 222C212 218 215 219 218 220C221 221 225 222 227 223C240 230 251 228 262 219C269 213 270 211 267 202C266 201 265 202 263 203C248 208 238 202 231 192C223 181 220 169 218 156C217 148 216 139 216 130C209 133 208 140 207 146C207 144 208 142 210 140Z',

  '',
  '',
  '',

  'M343 306C343 290 345 275 349 259C351 254 353 252 359 252C368 253 377 252 386 253C388 253 390 252 390 249C390 247 391 246 394 246C399 246 404 245 409 245C418 245 421 242 423 233C427 210 432 187 434 163C435 150 426 135 414 131C412 130 410 130 408 132C407 134 408 136 410 137C414 141 415 147 414 153C414 152 414 151 414 150C413 148 412 146 410 146C407 146 408 149 408 151C407 159 411 166 417 171C420 174 421 176 420 179C415 193 412 208 409 222C407 227 405 229 400 229C397 228 394 228 391 229C389 229 387 228 387 226C387 223 385 223 382 223C372 225 362 226 352 228C349 228 347 228 345 227C340 224 335 221 329 218C323 214 323 213 325 205C329 205 333 206 337 206C344 206 349 204 353 199C362 190 367 179 369 167C373 141 371 115 364 90C358 68 343 58 322 55C305 53 291 58 278 68C267 76 263 87 263 100C262 111 264 123 267 134C267 136 269 138 268 141C267 141 267 141 266 141C257 142 254 146 258 155C261 163 266 170 273 176C277 179 282 181 287 178C289 177 290 178 291 179C296 184 301 188 306 193C308 194 309 196 308 198C308 199 308 199 308 199C306 206 306 214 296 215C287 217 279 222 270 225C267 227 265 228 264 231C258 242 252 252 246 263C244 265 243 267 246 269C250 270 248 273 247 275C244 284 239 292 237 302C233 321 228 339 225 358C225 363 222 369 221 374C217 385 221 394 227 403C229 405 230 407 232 409C234 410 237 411 239 410C241 408 240 406 239 404C236 399 235 394 238 389C237 392 238 394 242 395C244 390 246 385 245 379C244 374 242 369 239 365C237 362 237 360 238 357C244 339 249 321 254 303C256 295 260 288 264 280C264 293 262 305 261 316C260 323 260 330 258 336C258 340 259 342 262 342C264 343 265 343 266 344C270 344 270 346 271 349C274 376 273 403 274 429C275 437 274 444 274 452C275 481 276 511 277 541C277 550 274 559 267 565C266 565 266 566 265 566C262 569 258 571 260 576C262 581 267 580 272 580C278 579 282 576 286 571C292 563 292 556 288 548C288 547 288 545 288 543C289 511 289 478 290 445C291 424 294 403 296 382C296 380 297 379 300 379C308 379 308 380 309 387C309 404 311 420 311 436C312 458 312 480 312 502C312 513 312 523 313 534C313 542 312 550 309 558C309 560 309 561 309 562C311 574 326 583 337 579C341 578 343 575 340 571C339 569 337 568 335 567C327 560 323 550 324 539C325 508 326 477 327 445C329 421 331 397 332 373C332 372 333 370 333 370C337 365 338 359 338 353C338 352 338 350 339 350C343 348 342 345 342 342C342 331 342 319 343 306Z',
  'M346 285C348 275 350 265 354 256C355 253 357 251 360 251C370 249 380 247 391 245C393 245 395 244 394 241C394 239 396 238 398 237C403 236 408 235 414 233C422 231 424 227 423 219C420 198 416 177 412 156C411 153 411 149 410 146C408 132 398 127 386 123C384 122 383 124 380 122C379 115 378 107 377 100C376 93 374 86 371 79C366 66 357 59 344 55C324 49 306 51 289 64C279 72 274 82 274 95C273 107 274 119 277 131C278 133 278 135 278 137C276 138 275 137 273 137C268 138 265 141 266 146C269 156 274 165 283 172C286 175 291 176 295 174C297 173 298 174 300 175C304 180 309 184 314 189C316 191 316 192 316 195C314 204 311 212 300 213C291 215 283 219 275 223C273 224 271 226 270 228C263 238 256 248 249 258C248 261 247 263 250 264C252 266 251 267 250 269C236 294 230 322 223 350C222 354 221 358 219 361C212 375 215 388 223 400C225 403 227 405 232 404C230 395 229 386 233 377C234 379 233 381 233 383C232 385 232 388 235 389C237 389 237 386 238 385C242 377 239 369 236 361C233 357 233 354 235 350C242 334 247 318 253 302C256 293 261 285 266 276C266 276 266 277 267 277C266 286 265 296 263 305C262 315 260 325 258 334C257 337 258 339 261 340C261 340 261 340 262 340C265 342 269 341 271 344C273 347 270 350 271 354C271 358 272 363 273 368C273 388 274 409 274 429C274 465 276 500 277 536C277 549 274 560 264 568C263 569 262 570 261 571C258 575 259 579 264 580C275 581 280 579 286 572C292 564 292 557 288 548C287 547 287 544 287 542C288 523 289 505 289 487C289 456 292 425 295 395C295 391 296 387 296 383C296 380 298 379 300 379C308 380 309 380 309 389C310 405 311 422 311 439C312 473 312 508 313 543C313 548 311 553 310 558C309 562 309 565 312 568C314 570 314 572 316 573C320 580 330 583 338 580C341 578 342 576 340 573C339 571 337 569 335 567C326 559 322 550 324 537C325 528 325 518 325 508C326 487 326 466 327 445C329 421 330 397 332 373C332 372 333 370 334 369C336 366 337 362 338 358C343 341 341 322 343 305C344 298 345 292 346 285ZM368 189C379 171 380 150 380 129C387 131 390 137 391 145C388 143 389 137 383 138C383 148 386 154 395 159C401 162 402 167 403 174C403 186 405 198 406 210C407 218 407 218 399 220C397 220 395 221 392 221C391 222 389 222 388 221C386 215 382 218 379 219C376 220 373 220 371 222C358 229 347 227 336 218C329 212 328 211 331 201C352 208 360 201 368 189Z',
  'M262 283C264 280 265 278 267 275C266 287 264 299 262 311C261 318 259 326 257 333C257 337 258 338 261 340C264 341 268 341 271 343C273 346 270 350 271 354C275 374 273 394 274 415C274 419 275 424 274 428C274 464 276 501 277 537C277 549 274 560 264 568C262 570 258 573 260 577C262 581 266 580 270 580C276 580 281 578 285 572C291 564 293 557 288 549C287 547 287 544 287 542C289 524 288 506 289 489C290 474 289 459 290 444C291 428 293 413 295 397C295 392 296 387 296 383C296 380 298 379 300 379C308 380 309 380 309 389C310 406 311 423 311 440C312 474 312 508 313 543C313 548 311 553 310 558C309 562 309 565 312 568C314 570 314 571 316 573C320 580 330 583 338 580C341 578 342 576 340 573C339 571 337 569 335 567C326 559 322 550 324 538C325 527 325 517 325 507C326 486 326 464 327 443C329 420 330 397 332 373C332 372 333 370 333 369C337 365 337 361 338 356C342 337 341 318 344 299C346 285 349 272 354 258C356 254 358 252 362 252C372 251 382 249 391 247C394 247 397 247 396 243C395 240 397 240 399 239C404 238 410 237 415 235C423 234 426 229 425 221C422 202 420 183 416 164C415 160 414 156 414 152C414 140 407 133 397 128C393 126 390 123 385 124C383 116 382 107 381 99C380 92 378 85 375 78C369 64 358 59 345 55C325 49 308 53 292 66C281 74 278 86 278 98C277 109 279 120 281 131C281 133 282 135 282 136C281 137 281 137 281 137C271 135 267 141 271 150C273 156 276 161 280 166C285 172 290 177 299 174C301 173 301 174 303 175C307 180 312 185 317 189C318 191 319 192 318 194C318 195 318 195 318 196C316 204 313 212 302 213C293 214 285 219 277 223C275 224 273 226 271 228C264 238 257 248 250 257C249 260 248 261 251 263C253 265 252 266 251 268C239 288 233 310 227 332C223 344 219 357 215 369C211 378 216 395 224 401C225 402 228 404 230 402C232 401 230 399 230 397C228 389 228 389 231 376C233 380 228 384 234 388C239 382 239 375 238 369C237 365 236 362 234 359C232 356 232 353 234 349C240 336 245 322 250 308C254 299 257 291 262 283ZM390 140C387 139 387 140 387 143C387 152 392 158 399 162C404 165 406 168 405 173C405 186 407 199 408 211C409 214 409 216 408 219C408 221 391 225 390 222C388 218 385 219 382 220C379 221 375 222 373 223C360 230 349 228 338 219C331 213 330 211 333 202C334 201 335 202 337 203C352 208 362 202 369 192C377 181 380 169 382 156C383 148 384 139 384 130C391 133 392 140 393 146C393 144 392 142 390 140Z',

  '',
  '',
  '',
];

paths[5] = paths[4] = paths[3] = paths[2];
paths[11] = paths[10] = paths[9] = paths[8];

export const Look = ({positive, frame}: VerbProps) => {
  const stage = frame % paths.length;

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill={
          positive < 3
            ? Colors.green50
            : positive > 5
            ? Colors.amber50
            : Colors.red50
        }>
        <Circle id="background" opacity="0.5" cx="300" cy="300" r="300" />
        <Path d={paths[stage]} fill="black" />
      </Svg>
    </View>
  );
};
