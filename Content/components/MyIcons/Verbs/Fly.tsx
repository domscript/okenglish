import Svg, {Circle, G, Path, Line} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';

import {VerbProps} from './index';

const paths = [
  'M295 394C294 388 295 385 296 381C297 373 301 363 304 356C306 354 306 354 308 350C310 347 315 344 319 343C326 342 328 342 335 343C339 345 342 346 345 349C349 353 352 357 352 363C352 366 352 367 352 369C352 371 351 373 351 375C349 379 347 385 345 389C346 389 346 390 347 390C350 390 351 392 350 395C347 399 344 402 341 404C338 406 335 407 332 404C327 407 323 409 318 411C317 412 316 414 316 416C317 420 320 422 323 423C326 425 328 426 331 428C332 428 333 429 333 429C337 434 343 440 346 445C346 446 345 446 344 447C348 452 352 463 354 468C356 474 358 480 360 487C360 488 361 489 362 490C366 492 367 493 370 495C372 496 371 499 371 500C372 503 372 506 371 509C371 510 371 510 370 510C369 510 369 509 368 507C368 505 368 505 367 504C367 503 365 503 365 502C365 502 365 502 364 502C363 503 366 505 367 506C367 507 367 509 366 509C365 508 363 505 363 505C363 505 359 501 359 500C358 499 357 495 357 494C354 488 351 481 349 474C347 471 346 469 345 467C343 461 340 457 337 452C336 452 335 453 334 453C333 451 332 449 331 448C330 459 333 471 334 482C332 482 330 481 328 481C330 492 331 504 333 515C333 517 334 520 336 520C348 526 359 531 371 537C373 538 376 538 378 537C383 536 383 537 384 541C385 543 386 545 387 548C388 551 388 554 387 557C385 557 384 555 384 554C383 552 382 550 381 548C380 546 378 544 376 544C374 544 373 543 372 543C358 537 345 531 331 526C328 525 326 523 326 520C323 512 321 500 319 492C317 492 314 492 311 492C312 500 314 512 315 520C315 522 316 523 317 524C326 534 335 543 344 552C346 554 348 556 351 557C354 559 354 560 352 563C351 566 350 569 348 571C347 574 346 576 343 577C341 576 342 575 342 573C343 572 343 570 344 568C346 564 345 560 341 557C331 547 321 538 311 529C309 527 308 526 308 524C305 513 302 503 299 493C298 491 297 489 297 488C295 484 294 481 294 477C294 475 295 474 293 472C293 471 293 470 293 469C294 457 294 445 293 433C292 431 292 428 291 426C289 420 286 415 284 409C285 408 286 408 286 407C287 407 287 407 287 406C284 397 282 387 281 377C280 373 279 370 279 366C279 364 278 362 276 361C275 361 274 360 274 359C272 357 272 357 270 357C270 356 270 353 271 353C270 350 273 351 273 348C274 347 273 347 275 347C275 347 277 347 277 348C277 350 280 350 280 351C280 352 281 354 281 354C283 355 283 358 283 360C284 362 285 365 286 369C287 371 287 374 287 375C288 377 288 379 288 381C290 388 291 396 293 403C293 405 296 403 296 403C294 399 295 397 295 394ZM301 410C300 410 298 408 296 403C297 408 299 414 300 419C302 418 305 419 308 418C308 417 308 415 308 414C305 413 303 412 301 410Z',

  'M347 399C343 403 339 408 332 404C330 404 329 405 328 406C325 407 323 408 321 409C316 412 315 416 320 419C321 420 322 421 324 421C332 425 338 432 344 439C345 440 347 441 345 443C345 445 346 446 347 447C354 457 359 467 365 478C366 480 368 482 371 483C380 487 382 489 381 500C374 499 369 495 365 489C357 476 349 464 340 452C338 449 333 450 332 446C330 453 332 460 332 467C333 469 333 472 333 475C334 476 334 477 333 478C328 479 331 483 331 485C333 493 335 501 336 509C337 512 338 514 341 515C352 519 363 524 374 528C376 530 379 530 382 529C385 528 387 528 388 531C389 534 390 537 392 540C393 542 393 545 392 547C389 547 388 545 387 544C386 539 382 537 378 535C364 531 350 526 336 521C333 520 331 518 329 515C327 507 324 500 322 492C321 489 320 487 317 488C313 489 314 492 315 494C315 494 315 495 315 495C316 512 324 524 338 533C345 538 350 545 359 547C359 548 360 548 360 549C362 552 358 566 355 568C353 567 353 565 353 563C355 556 352 552 347 548C337 540 327 533 316 525C314 524 313 522 312 519C307 507 304 494 298 482C296 477 295 471 295 465C294 460 294 456 294 451C295 440 294 429 288 419C286 415 284 411 285 405C286 400 283 395 282 390C281 382 280 375 279 367C278 363 275 363 273 360C272 359 269 359 270 356C270 353 270 350 272 348C273 346 275 347 276 347C276 347 280 350 280 351C281 353 282 354 282 355C287 365 287 377 290 388C291 394 292 400 297 405C299 407 299 411 300 414C300 416 300 418 303 418C305 418 307 417 308 415C308 413 306 412 305 411C299 409 297 404 296 399C295 381 299 365 309 351C316 341 330 342 340 346C350 350 355 361 353 372C352 378 348 383 346 389C351 393 351 393 347 399Z',

  'M321 494C320 490 317 491 315 492C313 492 314 494 314 496C316 503 317 511 319 518C319 521 320 523 322 525C331 533 339 542 348 550C349 551 350 552 351 553C353 555 357 555 357 559C357 564 353 573 350 576C348 575 348 573 348 571C350 563 347 557 342 552C333 545 324 537 316 530C313 528 312 525 311 522C308 513 306 503 302 494C295 479 294 464 295 448C295 439 294 430 290 422C287 417 284 412 286 405C287 402 284 398 284 394C283 387 281 379 281 372C280 366 278 361 272 358C271 358 270 358 270 356C270 352 270 350 272 347C277 346 278 347 280 347C285 358 288 363 289 376C289 382 291 388 292 394C293 398 294 402 298 405C300 407 300 412 301 415C302 419 304 419 307 418C309 417 310 414 307 413C296 408 296 398 297 388C298 376 302 364 308 353C314 343 324 342 334 343C344 344 351 350 355 359C357 366 355 372 353 378C351 382 350 385 348 389C353 393 354 395 349 400C345 404 341 408 334 405C333 404 332 406 331 406C328 408 325 409 322 410C317 413 316 416 321 420C321 421 322 421 323 422C333 426 339 433 345 441C346 442 348 443 347 446C346 447 347 449 348 450C355 460 360 471 365 482C367 486 370 487 373 488C380 491 383 497 380 506C379 502 375 504 373 502C365 498 363 489 358 483C353 475 349 465 343 457C342 455 341 452 337 452C335 452 335 449 333 448C332 457 333 466 334 474C334 477 336 480 331 482C330 482 330 484 331 486C333 495 335 504 336 513C337 516 338 518 341 519C352 525 363 531 374 536C376 537 377 538 379 537C383 535 386 537 387 542C388 545 391 548 391 552C391 554 391 555 389 556C388 556 387 555 386 553C384 546 378 544 372 541C360 536 347 530 335 525C332 524 330 522 329 518C326 510 324 502 321 494Z',

  'M281 373C281 366 278 361 273 358C271 357 270 355 270 353C271 348 273 346 278 346C281 347 282 350 284 355C289 366 289 378 291 389C292 394 293 399 295 403C298 402 297 400 297 399C295 382 299 366 309 352C315 343 328 340 340 345C351 350 356 361 354 372C353 378 350 384 347 389C353 393 353 395 349 400C345 404 341 409 334 406C332 405 331 406 330 407C327 408 324 410 321 411C317 414 316 418 320 421C321 422 323 424 325 424C333 428 338 436 344 443C345 444 347 446 345 448C344 449 345 450 346 451C352 461 356 472 360 483C361 487 363 489 367 491C376 494 378 499 376 508C364 507 360 497 355 489C352 482 348 474 345 467C342 460 338 454 331 451C330 455 330 461 331 466C331 471 331 476 332 482C327 483 327 485 328 489C330 498 331 506 332 515C332 518 334 521 337 523C346 529 356 535 365 542C368 544 370 544 373 544C376 543 378 545 379 548C380 553 384 558 382 564C378 564 378 561 377 560C375 556 373 553 369 551C355 543 342 534 328 526C326 525 325 523 324 520C322 512 320 505 318 497C318 494 316 492 313 492C309 493 310 496 311 498C312 505 313 511 314 518C314 522 316 526 319 529C324 536 330 543 335 550C338 554 340 558 345 561C346 561 348 562 347 564C345 569 345 576 339 580C339 581 338 580 338 580C336 579 337 577 337 575C340 568 338 563 334 558C326 550 319 541 311 532C308 529 307 525 305 521C302 509 299 496 295 484C291 474 292 463 293 453C295 440 293 428 287 416C286 413 284 410 286 406C287 406 286 404 286 403C283 393 283 383 281 373ZM300 409C300 412 300 415 301 417C302 419 303 420 304 419C306 419 308 419 308 417C309 415 307 414 306 413C304 413 302 411 300 409Z',

  'M367 499C369 505 368 510 366 515C358 510 355 504 353 496C350 485 345 474 341 464C339 460 337 455 332 454C331 453 331 452 329 451C329 454 329 458 329 462C329 467 329 472 329 477C330 481 330 484 325 484C326 495 327 507 329 518C329 521 331 522 333 524C340 530 348 536 355 543C359 546 362 550 368 550C372 550 374 553 373 557C371 561 372 565 370 569C369 570 369 572 367 571C365 571 365 569 365 568C365 566 366 564 366 562C366 559 365 557 362 555C350 546 338 536 325 527C323 526 321 523 321 520C319 512 317 504 315 496C315 493 313 492 310 492C306 493 307 496 308 498C308 504 310 511 310 517C310 522 312 525 314 529C319 538 324 547 329 556C331 559 332 561 335 563C340 567 340 569 335 574C333 576 330 579 327 581C326 582 325 583 323 582C322 580 323 579 324 578C325 577 325 576 326 575C330 570 330 568 326 562C321 554 316 545 310 537C305 530 302 522 300 513C298 504 296 494 292 485C290 477 290 468 291 459C292 450 292 441 292 432C291 426 288 420 286 414C285 412 284 409 285 406C286 405 286 404 286 402C282 390 281 378 280 366C279 361 275 360 273 358C270 356 270 355 270 353C271 349 271 347 277 344C282 349 282 350 284 355C289 366 288 379 291 391C292 395 293 399 295 403C296 400 295 398 295 396C295 381 298 367 305 355C313 341 332 338 344 349C353 356 355 364 351 375C350 380 348 384 346 389C351 392 352 394 348 399C344 403 339 408 332 405C331 405 330 406 329 407C326 408 324 409 322 410C315 414 314 419 321 423C331 428 337 435 342 444C343 445 345 447 343 449C342 450 343 451 344 452C350 461 352 472 355 483C357 489 359 493 364 496C365 497 366 498 367 499ZM299 413C300 414 300 415 300 416C301 418 301 419 304 419C305 419 307 419 307 417C308 415 306 414 305 413C303 413 302 412 300 411C299 410 300 412 299 413Z',

  'M296 385C297 374 300 365 305 356C313 341 331 338 344 348C353 356 355 364 352 376C350 380 348 384 347 389C352 393 352 394 347 400C344 404 340 408 333 405C332 405 331 406 330 406C327 408 324 409 321 411C316 413 315 417 319 421C321 423 322 424 324 425C331 428 335 433 339 439C341 443 345 446 344 451C343 451 344 452 345 453C351 464 353 476 356 488C357 492 360 494 363 496C370 501 368 509 364 515C362 514 362 512 359 510C356 509 355 505 354 501C349 486 344 471 337 457C336 454 330 455 329 451C329 459 329 468 329 476C329 479 331 483 326 484C325 484 324 485 325 486C326 497 327 508 328 518C328 521 330 522 331 523C341 532 351 540 360 549C362 550 365 550 367 551C368 552 370 553 371 555C372 558 367 571 363 573C361 571 362 569 363 567C365 560 362 556 357 553C346 544 336 536 325 528C322 526 321 524 320 521C319 512 317 504 315 496C314 493 313 492 310 492C307 493 307 495 307 497C308 506 309 514 310 522C310 523 311 524 311 524C318 537 324 551 333 563C338 570 338 570 332 576C329 578 327 581 324 582C323 583 321 583 320 582C319 581 320 580 321 579C321 578 321 578 322 578C328 571 330 570 323 559C319 553 316 548 313 543C305 532 300 521 299 508C297 498 293 489 291 478C290 467 292 456 292 445C292 435 292 425 287 416C285 412 286 408 286 404C286 399 284 394 283 388C282 381 281 374 281 366C280 361 276 361 274 358C273 357 271 356 271 354C271 351 271 346 273 346C277 345 278 347 280 347C284 352 288 362 289 375C290 383 292 392 294 400C294 401 295 402 295 402C294 397 296 391 296 385ZM300 411C300 414 300 416 302 419C304 419 307 420 308 416C308 414 305 414 304 413C302 412 301 411 300 411Z',

  'M283 386C282 379 281 372 281 365C281 362 277 362 276 360C275 358 271 357 271 355C271 352 271 348 273 346C275 344 277 346 279 347C283 351 289 363 290 376C290 384 292 392 294 399C295 400 295 401 296 403C294 385 298 369 306 354C312 344 320 342 330 343C341 344 349 349 353 359C355 365 354 372 351 378C350 382 348 385 347 389C349 391 353 392 350 396C347 402 340 408 335 406C332 405 331 406 329 407C326 408 324 410 321 411C316 413 315 417 319 421C320 422 322 424 324 425C333 429 337 437 343 444C345 447 343 450 344 452C350 464 353 476 356 489C357 493 361 494 363 496C369 501 370 507 366 515C364 513 362 512 360 510C356 508 355 504 354 500C349 486 344 472 338 459C336 455 331 456 330 451C329 453 329 454 329 456C329 463 329 471 329 478C329 480 330 483 326 483C324 484 324 485 325 487C326 496 327 506 328 515C328 519 329 522 332 524C341 532 350 540 359 549C361 551 364 551 367 552C370 554 371 556 370 559C370 562 369 565 368 569C367 571 367 573 364 574C362 572 362 571 362 569C364 562 361 557 356 553C345 544 334 535 324 527C321 525 320 523 320 520C318 512 316 504 315 496C314 494 313 492 310 492C307 492 307 495 307 497C309 511 309 525 317 537C323 547 327 558 334 567C336 570 336 572 333 574C330 576 328 580 324 582C322 583 321 584 320 582C318 581 320 580 321 578C321 578 322 577 322 577C328 570 328 568 324 561C320 555 317 549 312 543C305 532 300 520 298 507C297 499 295 492 292 485C290 478 290 471 291 463C292 452 292 441 292 430C292 424 288 419 286 413C286 411 284 409 286 406C287 405 286 403 286 402C285 397 284 391 283 386ZM306 414C304 413 302 411 300 409C300 413 300 415 301 417C302 420 304 419 306 418C308 418 309 416 306 414Z',

  'M308 350C316 341 325 341 335 344C344 347 350 354 352 364C353 369 351 373 350 378C348 382 347 385 345 389C350 393 351 395 346 400C342 404 338 408 331 405C330 405 329 406 328 406C325 408 322 409 320 411C314 414 314 418 318 422C319 423 320 424 322 424C328 428 334 433 338 440C340 443 343 446 342 451C341 451 342 453 343 453C348 463 350 474 353 484C354 489 357 493 362 496C368 500 369 507 365 514C363 511 360 511 357 508C352 502 350 494 347 487C344 480 342 473 340 466C338 460 334 455 327 452C327 460 327 468 327 477C327 480 328 483 324 484C322 484 322 486 322 487C323 497 324 507 325 517C326 519 326 521 328 523C337 531 346 539 355 548C358 550 361 552 364 552C367 553 369 555 368 558C368 562 368 566 367 570C367 571 366 573 364 574C361 572 362 569 362 566C362 563 361 560 358 558C346 548 335 538 323 529C320 526 318 523 317 519C316 512 314 504 313 497C312 494 312 492 308 492C304 493 305 495 305 497C306 512 307 526 316 539C321 548 325 559 332 568C333 569 334 570 333 572C329 576 326 580 321 583C320 584 319 585 318 583C317 582 317 580 318 580C327 572 323 564 318 557C315 552 313 547 310 543C303 533 298 522 296 510C295 497 288 486 289 473C289 464 289 456 290 447C292 436 289 424 285 414C284 411 282 409 285 406C286 406 285 404 285 403C282 392 280 380 280 368C279 363 275 360 272 358C270 356 270 354 270 352C271 347 273 346 277 346C281 348 281 349 283 354C288 366 288 378 290 391C291 395 292 399 294 403C293 383 296 366 308 350ZM306 417C306 412 301 414 298 410C299 419 300 420 306 417Z',

  'M281 373C281 366 278 361 273 358C271 357 270 355 270 353C271 348 273 346 278 346C281 347 282 350 284 355C289 366 289 378 291 389C292 394 293 399 295 403C298 402 297 400 297 399C295 382 299 366 309 352C315 343 328 340 340 345C351 350 356 361 354 372C353 378 350 384 347 389C353 393 353 395 349 400C345 404 341 409 334 406C332 405 331 406 330 407C327 408 324 410 321 411C317 414 316 418 320 421C321 422 323 424 325 424C333 428 338 436 344 443C345 444 347 446 345 448C344 449 345 450 346 451C352 461 356 472 360 483C361 487 363 489 367 491C376 494 378 499 376 508C364 507 360 497 355 489C352 482 348 474 345 467C342 460 338 454 331 451C330 455 330 461 331 466C331 471 331 476 332 482C327 483 327 485 328 489C330 498 331 506 332 515C332 518 334 521 337 523C346 529 356 535 365 542C368 544 370 544 373 544C376 543 378 545 379 548C380 553 384 558 382 564C378 564 378 561 377 560C375 556 373 553 369 551C355 543 342 534 328 526C326 525 325 523 324 520C322 512 320 505 318 497C318 494 316 492 313 492C309 493 310 496 311 498C312 505 313 511 314 518C314 522 316 526 319 529C324 536 330 543 335 550C338 554 340 558 345 561C346 561 348 562 347 564C345 569 345 576 339 580C339 581 338 580 338 580C336 579 337 577 337 575C340 568 338 563 334 558C326 550 319 541 311 532C308 529 307 525 305 521C302 509 299 496 295 484C291 474 292 463 293 453C295 440 293 428 287 416C286 413 284 410 286 406C287 406 286 404 286 403C283 393 283 383 281 373ZM300 409C300 412 300 415 301 417C302 419 303 420 304 419C306 419 308 419 308 417C309 415 307 414 306 413C304 413 302 411 300 409Z',
];

export const Fly = ({positive, frame}: VerbProps) => {
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

        <G id="line-2">
          <Line
            id="Line 8"
            x1="274.466"
            y1="356.181"
            x2="267.466"
            y2="374.181"
            stroke="#787878"
          />
          <Line
            id="Line 9"
            x1="275.491"
            y1="355.094"
            x2="271.491"
            y2="376.094"
            stroke="#787878"
          />
          <Line
            id="Line 10"
            x1="276.499"
            y1="355.023"
            x2="275.499"
            y2="377.023"
            stroke="#787878"
          />
          <Line
            id="Line 11"
            x1="275.48"
            y1="355.14"
            x2="268.48"
            y2="379.14"
            stroke="#787878"
          />
          <Line
            id="Line 12"
            x1="276.496"
            y1="355.06"
            x2="273.496"
            y2="380.06"
            stroke="#787878"
          />
          <Line
            id="Line 13"
            x1="276.497"
            y1="354.948"
            x2="278.497"
            y2="373.948"
            stroke="#787878"
          />
          <Line
            id="Line 14"
            x1="276.4"
            y1="355.3"
            x2="267.4"
            y2="367.3"
            stroke="#787878"
          />
        </G>

        <Path d={paths[stage]} fill="black" />

        <G id="line">
          <Line
            id="Line 2"
            x1="276.501"
            y1="354.968"
            x2="287.501"
            y2="180.968"
            stroke="#787878"
          />
          <Line
            id="Line 3"
            x1="276.503"
            y1="355.056"
            x2="260.503"
            y2="212.056"
            stroke="#787878"
          />
          <Line
            id="Line 4"
            x1="276.529"
            y1="353.168"
            x2="217.529"
            y2="188.168"
            stroke="#787878"
          />
          <Line
            id="Line 5"
            x1="275.511"
            y1="354.895"
            x2="315.511"
            y2="167.895"
            stroke="#787878"
          />
          <Line
            id="Line 8_2"
            x1="275.544"
            y1="354.794"
            x2="354.544"
            y2="179.794"
            stroke="#787878"
          />
          <Line
            id="Line 6"
            x1="276.501"
            y1="355.035"
            x2="262.501"
            y2="155.035"
            stroke="#787878"
          />
          <Line
            id="Line 7"
            x1="276.511"
            y1="355.105"
            x2="233.511"
            y2="155.105"
            stroke="#787878"
          />
          <Line
            id="Line 9_2"
            x1="276.505"
            y1="355.072"
            x2="242.505"
            y2="123.073"
            stroke="#787878"
          />
          <Line
            id="Line 10_2"
            x1="276.502"
            y1="354.951"
            x2="298.502"
            y2="130.951"
            stroke="#787878"
          />
          <Line
            id="Line 11_2"
            x1="276.519"
            y1="354.865"
            x2="339.519"
            y2="130.865"
            stroke="#787878"
          />
        </G>

        <G id="baloons">
          <G id="darkblue" translate={[1, 2, 3].includes(stage) ? 2 : 0}>
            <Path
              d="M277.327 80.9927C269.429 100.001 252.126 115.462 244.201 123.078C241.33 124.264 250.8 132.956 242.858 132.034C235.509 132.548 242.344 124.685 241.751 123.25C223.996 108.737 203.271 79.908 206.296 54.4522C209.322 28.9964 236.934 16.6394 255.137 24.203C281.42 33.9341 286.636 58.5885 277.327 80.9927Z"
              fill="#404BAF"
            />
            <Path
              d="M277.327 80.9927C269.429 100.001 256.188 108.238 244.845 112.642C227.829 119.249 203.271 79.908 206.297 54.4522C209.322 28.9964 236.934 16.6394 255.137 24.203C281.42 33.9341 286.636 58.5885 277.327 80.9927Z"
              fill="#515ED1"
            />
            <Path
              d="M226.296 32.7199C227.174 33.5573 227.013 38.4077 223.326 42.2437C220.053 46.7057 216.148 46.1842 215.27 45.3467C214.392 44.5092 214.493 40.0191 217.265 36.7727C221.423 31.9024 225.419 31.8824 226.296 32.7199Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="pink" translate={[3, 4].includes(stage) ? 2 : 0}>
            <Path
              d="M379.975 105.172C368.474 118.553 350.258 126.536 341.771 130.628C339.116 130.829 344.515 140.434 338.29 137.566C332.166 136.026 339.83 131.442 339.73 130.115C329.134 113.56 319.934 84.5503 329.184 64.6193C338.434 44.6883 364.221 41.981 377.034 52.9945C395.852 67.9271 393.53 89.4021 379.975 105.172Z"
              fill="#BE44B2"
            />
            <Path
              d="M379.975 105.173C368.474 118.553 355.492 121.734 345.077 122.298C329.455 123.145 319.934 84.5504 329.184 64.6193C338.434 44.6883 364.221 41.981 377.034 52.9945C395.852 67.9271 393.53 89.4022 379.975 105.173Z"
              fill="#F058E1"
            />
            <Path
              d="M353.273 51.9537C353.758 52.8736 352.304 56.7709 348.262 58.8821C344.385 61.6149 341.353 60.1256 340.869 59.2057C340.384 58.2857 341.691 54.6647 344.829 52.783C349.536 49.9598 352.789 51.0338 353.273 51.9537Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="green" translate={[2, 3, 4].includes(stage) ? 3 : 0}>
            <Path
              d="M336.442 91.178C327.108 109.524 308.669 123.61 300.182 130.595C297.229 131.557 306.003 140.95 298.156 139.422C290.789 139.37 298.207 132.055 297.727 130.578C281.139 114.745 262.688 84.4098 267.659 59.2616C272.631 34.1133 301.11 23.9129 318.679 32.852C344.136 44.5726 347.444 69.5548 336.442 91.178Z"
              fill="#56B746"
            />
            <Path
              d="M336.442 91.178C327.108 109.524 313.274 116.72 301.625 120.24C284.152 125.52 262.688 84.4098 267.659 59.2616C272.631 34.1133 301.11 23.9129 318.679 32.852C344.136 44.5726 347.444 69.5548 336.442 91.178Z"
              fill="#57D764"
            />
            <Path
              d="M294.355 36.4477C294.941 37.5097 293.333 42.0887 288.666 44.643C284.206 47.9185 280.636 46.2501 280.05 45.188C279.464 44.126 280.906 39.8726 284.524 37.6065C289.95 34.2067 293.769 35.3856 294.355 36.4477Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="purple" translateX={[0, 1, 2].includes(stage) ? 2 : -2}>
            <Path
              d="M249.156 102.97C249.156 123.555 239.11 144.471 234.714 154.545C232.517 156.741 244.598 161.134 236.91 163.331C230.321 166.625 233.615 156.741 232.517 155.643C210.553 149.054 180.352 130.384 173.379 105.716C166.406 81.0475 187.162 59.0417 206.875 59.0417C234.879 57.9433 249.156 78.7092 249.156 102.97Z"
              fill="#694CC5"
            />
            <Path
              d="M249.156 102.97C249.156 123.555 240.09 136.241 231.304 144.661C218.125 157.291 180.352 130.384 173.379 105.716C166.406 81.0475 187.162 59.0417 206.875 59.0417C234.879 57.9433 249.156 78.7092 249.156 102.97Z"
              fill="#7857D7"
            />
            <Path
              d="M186.826 73.2768C187.83 73.9576 188.473 78.7679 185.472 83.1607C182.982 88.1028 179.044 88.2344 178.04 87.5537C177.036 86.8729 176.393 82.4279 178.589 78.7679C181.884 73.2769 185.822 72.5961 186.826 73.2768Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="red" translate={[4, 5].includes(stage) ? 2 : 0}>
            <Path
              d="M296.667 112.21C288.769 131.218 271.467 146.679 263.541 154.295C260.67 155.481 270.14 164.173 262.199 163.251C254.849 163.765 261.684 155.902 261.092 154.467C243.337 139.954 222.611 111.125 225.637 85.6693C228.663 60.2135 256.274 47.8564 274.478 55.42C300.76 65.1511 305.976 89.8056 296.667 112.21Z"
              fill="#8E3B33"
            />
            <Path
              d="M296.668 112.21C288.769 131.218 275.529 139.455 264.185 143.859C247.169 150.466 222.611 111.125 225.637 85.6693C228.663 60.2135 256.275 47.8564 274.478 55.42C300.76 65.1511 305.977 89.8056 296.668 112.21Z"
              fill="#D15C51"
            />
            <Path
              d="M245.637 63.9369C246.515 64.7744 246.353 69.6248 242.667 73.4607C239.394 77.9228 235.488 77.4012 234.611 76.5638C233.733 75.7263 233.834 71.2361 236.605 67.9898C240.763 63.1195 244.759 63.0994 245.637 63.9369Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="blue" translate={[6, 7].includes(stage) ? 2 : 0}>
            <Path
              d="M356.402 130.808C345.833 148.472 326.473 161.263 317.528 167.65C314.515 168.407 322.626 178.379 314.902 176.317C307.555 175.761 315.458 168.971 315.079 167.465C299.614 150.533 283.284 119.005 289.967 94.2565C296.649 69.5077 325.759 61.2816 342.675 71.4029C367.27 84.8394 368.859 109.989 356.402 130.808Z"
              fill="#71A9BD"
            />
            <Path
              d="M356.402 130.809C345.833 148.472 331.539 154.704 319.677 157.418C301.883 161.489 283.285 119.005 289.967 94.2567C296.649 69.508 325.76 61.2819 342.675 71.4031C367.27 84.8396 368.859 109.99 356.402 130.809Z"
              fill="#74CEE4"
            />
            <Path
              d="M316.682 73.0206C317.407 73.9936 316.433 78.748 312.154 81.91C308.178 85.7586 304.415 84.5883 303.691 83.6153C302.967 82.6422 303.82 78.2329 307.098 75.4984C312.015 71.3959 315.958 72.0476 316.682 73.0206Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="cian" translate={[4, 5, 6, 7].includes(stage) ? 2 : 0}>
            <Path
              d="M232.256 140.038C232.256 158.781 223.108 177.827 219.105 187C217.105 189 228.105 193 221.105 195C215.105 198 218.105 189 217.105 188C197.105 182 169.605 165 163.255 142.538C156.906 120.076 175.806 100.038 193.756 100.038C219.256 99.0378 232.256 117.947 232.256 140.038Z"
              fill="#4DAAA8"
            />
            <Path
              d="M232.256 140.038C232.256 158.781 224 170.333 216 178C204 189.5 169.605 165 163.255 142.538C156.906 120.076 175.806 100.038 193.756 100.038C219.256 99.0378 232.256 117.947 232.256 140.038Z"
              fill="#57BCB6"
            />
            <Path
              d="M175.5 113C176.414 113.62 177 118 174.267 122C172 126.5 168.414 126.62 167.5 126C166.586 125.38 166 121.333 168 118C171 113 174.586 112.38 175.5 113Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G
            id="orange"
            translateY={[0, 1, 2, 6, 7, 8].includes(stage) ? 2 : 0}>
            <Path
              d="M317.443 144.979C310.755 161.306 295.991 174.633 289.231 181.195C286.775 182.223 294.929 189.633 288.118 188.877C281.821 189.349 287.646 182.58 287.132 181.352C271.851 168.989 253.962 144.369 256.446 122.537C258.93 100.705 282.543 89.994 298.178 96.3986C320.748 104.626 325.325 125.736 317.443 144.979Z"
              fill="#CA8038"
            />
            <Path
              d="M317.443 144.979C310.755 161.306 299.442 168.423 289.737 172.247C275.181 177.983 253.962 144.369 256.446 122.537C258.93 100.705 282.543 89.994 298.179 96.3986C320.748 104.626 325.325 125.736 317.443 144.979Z"
              fill="#D89149"
            />
            <Path
              d="M275.304 102.913C276.054 103.633 275.905 107.79 272.736 111.07C269.921 114.887 266.574 114.431 265.824 113.711C265.074 112.991 265.17 109.142 267.553 106.366C271.129 102.201 274.554 102.193 275.304 102.913Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="brown" translate={[1, 2, 3].includes(stage) ? 2 : 0}>
            <Path
              d="M394.954 155.46C383.212 168.63 364.854 176.282 356.295 180.219C353.637 180.372 358.86 190.073 352.689 187.093C346.594 185.443 354.34 180.998 354.263 179.669C343.969 162.925 335.296 133.753 344.906 113.993C354.516 94.2331 380.348 91.9937 392.96 103.238C411.503 118.509 408.792 139.938 394.954 155.46Z"
              fill="#442B15"
            />
            <Path
              d="M394.954 155.461C383.213 168.63 370.175 171.575 359.752 171.951C344.116 172.514 335.297 133.753 344.906 113.993C354.516 94.2332 380.348 91.9938 392.96 103.238C411.503 118.509 408.792 139.938 394.954 155.461Z"
              fill="#633915"
            />
            <Path
              d="M366.977 102.637C367.457 103.559 365.985 107.45 361.933 109.542C358.043 112.256 355.019 110.753 354.538 109.83C354.058 108.908 355.382 105.293 358.529 103.427C363.249 100.626 366.497 101.715 366.977 102.637Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="yellow" translate={[7, 8, 0].includes(stage) ? 2 : 0}>
            <Path
              d="M282.435 171.957C278.356 189.123 265.834 204.575 260.172 212.104C257.905 213.501 267.108 219.558 260.262 219.866C254.114 221.308 258.82 213.718 258.122 212.585C241.111 202.737 219.626 181.184 218.699 159.23C217.772 137.277 239.443 123.039 255.881 126.945C279.452 131.579 287.243 151.725 282.435 171.957Z"
              fill="#D4BF51"
            />
            <Path
              d="M282.436 171.957C278.357 189.123 268.282 197.906 259.287 203.186C245.794 211.107 219.626 181.184 218.699 159.23C217.773 137.277 239.443 123.039 255.881 126.945C279.453 131.579 287.243 151.725 282.436 171.957Z"
              fill="#E3CC59"
            />
            <Path
              d="M232.73 138.756C233.591 139.339 234.142 143.462 231.57 147.227C229.435 151.463 226.06 151.576 225.199 150.993C224.339 150.409 223.787 146.599 225.67 143.462C228.494 138.756 231.869 138.172 232.73 138.756Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
          <G id="green_2" translate={[1, 3, 4, 5].includes(stage) ? 2 : 0}>
            <Path
              d="M356.417 171.509C346.296 187.378 328.485 198.588 320.237 204.204C317.511 204.822 324.404 214.121 317.563 212.052C311.006 211.368 318.334 205.36 318.051 203.976C304.831 188.147 291.379 158.975 298.282 136.544C305.185 114.113 331.558 107.304 346.33 116.951C367.856 129.808 368.345 152.804 356.417 171.509Z"
              fill="#90B457"
            />
            <Path
              d="M356.417 171.509C346.297 187.378 333.265 192.723 322.541 194.915C306.456 198.203 291.379 158.975 298.282 136.544C305.185 114.113 331.559 107.304 346.33 116.951C367.856 129.808 368.345 152.804 356.417 171.509Z"
              fill="#A1C961"
            />
            <Path
              d="M319.107 120.745C319.733 121.575 318.923 125.655 315.273 128.388C311.884 131.707 308.653 130.723 308.027 129.893C307.402 129.063 308.111 125.279 310.906 122.918C315.099 119.376 318.482 119.915 319.107 120.745Z"
              fill="white"
              fillOpacity="0.3"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};